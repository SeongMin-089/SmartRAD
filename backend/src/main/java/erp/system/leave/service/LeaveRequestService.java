package erp.system.leave.service;

import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.employee.entity.Employee;
import erp.system.employee.repository.EmployeeRepository;
import erp.system.leave.dto.LeaveRequestCreateRequest;
import erp.system.leave.dto.LeaveRequestResponse;
import erp.system.leave.entity.EmployeeLeaveBalance;
import erp.system.leave.entity.LeaveRequest;
import erp.system.leave.entity.LeaveType;
import erp.system.leave.repository.EmployeeLeaveBalanceRepository;
import erp.system.leave.repository.LeaveRequestRepository;
import erp.system.leave.repository.LeaveTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LeaveRequestService {

    private final LeaveRequestRepository leaveRequestRepository;
    private final EmployeeRepository employeeRepository;
    private final LeaveTypeRepository leaveTypeRepository;
    private final EmployeeLeaveBalanceRepository employeeLeaveBalanceRepository;

    public List<LeaveRequestResponse> getList(Long employeeId, String status) {
        return leaveRequestRepository.findAll((root, query, cb) -> {
            var predicates = cb.conjunction();
            if (employeeId != null) {
                predicates = cb.and(predicates, cb.equal(root.get("employee").get("employeeId"), employeeId));
            }
            if (StringUtils.hasText(status)) {
                predicates = cb.and(predicates, cb.equal(root.get("status"), status));
            }
            return predicates;
        }).stream().map(LeaveRequestResponse::from).toList();
    }

    @Transactional
    public LeaveRequestResponse create(LeaveRequestCreateRequest request) {
        Employee employee = employeeRepository.findById(request.employeeId())
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));
        LeaveType leaveType = leaveTypeRepository.findById(request.leaveTypeId())
                .orElseThrow(() -> new BusinessException(ErrorCode.LEAVE_TYPE_NOT_FOUND));

        BigDecimal leaveDays = BigDecimal.valueOf(
                ChronoUnit.DAYS.between(request.startDate(), request.endDate()) + 1
        );

        LeaveRequest leaveRequest = LeaveRequest.builder()
                .employee(employee)
                .leaveType(leaveType)
                .startDate(request.startDate())
                .endDate(request.endDate())
                .leaveDays(leaveDays)
                .reason(request.reason())
                .build();

        return LeaveRequestResponse.from(leaveRequestRepository.save(leaveRequest));
    }

    @Transactional
    public LeaveRequestResponse approve(Long leaveRequestId, Long approverId) {
        LeaveRequest leaveRequest = findById(leaveRequestId);
        Employee approver = employeeRepository.findById(approverId)
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));

        EmployeeLeaveBalance balance = employeeLeaveBalanceRepository
                .findByEmployee_EmployeeIdAndLeaveType_LeaveTypeId(
                        leaveRequest.getEmployee().getEmployeeId(),
                        leaveRequest.getLeaveType().getLeaveTypeId()
                )
                .orElseThrow(() -> new BusinessException(ErrorCode.LEAVE_BALANCE_NOT_FOUND));

        balance.use(leaveRequest.getLeaveDays());
        leaveRequest.approve(approver);

        return LeaveRequestResponse.from(leaveRequest);
    }

    @Transactional
    public LeaveRequestResponse reject(Long leaveRequestId, Long approverId) {
        LeaveRequest leaveRequest = findById(leaveRequestId);
        Employee approver = employeeRepository.findById(approverId)
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));

        leaveRequest.reject(approver);

        return LeaveRequestResponse.from(leaveRequest);
    }

    private LeaveRequest findById(Long leaveRequestId) {
        return leaveRequestRepository.findById(leaveRequestId)
                .orElseThrow(() -> new BusinessException(ErrorCode.LEAVE_REQUEST_NOT_FOUND));
    }
}
