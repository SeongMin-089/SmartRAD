package erp.system.allowance.service;

import erp.system.allowance.dto.EmployeeAllowanceCreateRequest;
import erp.system.allowance.dto.EmployeeAllowanceResponse;
import erp.system.allowance.entity.Allowance;
import erp.system.allowance.entity.EmployeeAllowance;
import erp.system.allowance.repository.AllowanceRepository;
import erp.system.allowance.repository.EmployeeAllowanceRepository;
import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.employee.entity.Employee;
import erp.system.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EmployeeAllowanceService {

    private final EmployeeAllowanceRepository employeeAllowanceRepository;
    private final EmployeeRepository employeeRepository;
    private final AllowanceRepository allowanceRepository;

    public List<EmployeeAllowanceResponse> getByEmployee(Long employeeId) {
        return employeeAllowanceRepository.findAllByEmployee_EmployeeId(employeeId).stream()
                .map(EmployeeAllowanceResponse::from)
                .toList();
    }

    @Transactional
    public EmployeeAllowanceResponse create(EmployeeAllowanceCreateRequest request) {
        Employee employee = employeeRepository.findById(request.employeeId())
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));
        Allowance allowance = allowanceRepository.findById(request.allowanceId())
                .orElseThrow(() -> new BusinessException(ErrorCode.ALLOWANCE_NOT_FOUND));

        EmployeeAllowance employeeAllowance = EmployeeAllowance.builder()
                .employee(employee)
                .allowance(allowance)
                .amount(request.amount())
                .startDate(request.startDate())
                .endDate(request.endDate())
                .build();

        return EmployeeAllowanceResponse.from(employeeAllowanceRepository.save(employeeAllowance));
    }

    @Transactional
    public EmployeeAllowanceResponse upsert(EmployeeAllowanceCreateRequest request) {
        EmployeeAllowance existing = employeeAllowanceRepository
                .findByEmployee_EmployeeIdAndAllowance_AllowanceId(request.employeeId(), request.allowanceId())
                .orElse(null);

        if (existing != null) {
            existing.updateAmount(request.amount(), request.startDate(), request.endDate());
            return EmployeeAllowanceResponse.from(existing);
        }

        return create(request);
    }
}
