package erp.system.certificate.service;

import erp.system.certificate.dto.EmployeeCertificateIssueCreateRequest;
import erp.system.certificate.dto.EmployeeCertificateIssueResponse;
import erp.system.certificate.entity.EmployeeCertificateIssue;
import erp.system.certificate.repository.EmployeeCertificateIssueRepository;
import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.employee.entity.Employee;
import erp.system.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EmployeeCertificateIssueService {

    private static final DateTimeFormatter APPLICATION_NO_DATE_FORMAT = DateTimeFormatter.ofPattern("yyyyMMdd");

    private final EmployeeCertificateIssueRepository certificateIssueRepository;
    private final EmployeeRepository employeeRepository;

    public List<EmployeeCertificateIssueResponse> getByEmployee(Long employeeId) {
        return certificateIssueRepository.findAllByEmployee_EmployeeIdOrderByApplicationDateDesc(employeeId).stream()
                .map(EmployeeCertificateIssueResponse::from)
                .toList();
    }

    @Transactional
    public EmployeeCertificateIssueResponse create(EmployeeCertificateIssueCreateRequest request) {
        Employee employee = employeeRepository.findById(request.employeeId())
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));

        EmployeeCertificateIssue issue = EmployeeCertificateIssue.builder()
                .employee(employee)
                .applicationNo(generateApplicationNo())
                .certificateType(request.certificateType())
                .applicationDate(LocalDate.now())
                .purpose(request.purpose())
                .memo(request.memo())
                .build();

        return EmployeeCertificateIssueResponse.from(certificateIssueRepository.save(issue));
    }

    @Transactional
    public EmployeeCertificateIssueResponse approve(Long id) {
        EmployeeCertificateIssue issue = findActive(id);
        issue.approve();
        return EmployeeCertificateIssueResponse.from(issue);
    }

    @Transactional
    public EmployeeCertificateIssueResponse reject(Long id, String memo) {
        EmployeeCertificateIssue issue = findActive(id);
        issue.reject(memo);
        return EmployeeCertificateIssueResponse.from(issue);
    }

    @Transactional
    public EmployeeCertificateIssueResponse issue(Long id) {
        EmployeeCertificateIssue issue = findActive(id);
        issue.issue();
        return EmployeeCertificateIssueResponse.from(issue);
    }

    private EmployeeCertificateIssue findActive(Long id) {
        return certificateIssueRepository.findById(id)
                .orElseThrow(() -> new BusinessException(ErrorCode.CERTIFICATE_ISSUE_NOT_FOUND));
    }

    private String generateApplicationNo() {
        String candidate;
        do {
            String datePart = LocalDate.now().format(APPLICATION_NO_DATE_FORMAT);
            int random = ThreadLocalRandom.current().nextInt(0, 1_000_000);
            candidate = "CI" + datePart + String.format("%06d", random);
        } while (certificateIssueRepository.existsByApplicationNo(candidate));

        return candidate;
    }
}
