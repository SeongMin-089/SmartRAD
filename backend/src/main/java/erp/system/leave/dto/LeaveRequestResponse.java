package erp.system.leave.dto;

import erp.system.employee.entity.Employee;
import erp.system.leave.entity.LeaveRequest;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.proxy.HibernateProxy;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record LeaveRequestResponse(
        Long leaveRequestId,
        Long employeeId,
        String employeeName,
        String employeeNo,
        Long departmentId,
        String departmentName,
        String positionName,
        String email,
        Long leaveTypeId,
        String leaveTypeName,
        LocalDate startDate,
        LocalDate endDate,
        BigDecimal leaveDays,
        String reason,
        String status,
        Long approverId,
        String approverName,
        String rejectionReason,
        LocalDateTime processedAt,
        LocalDateTime createdAt
) {
    private static final String DELETED_EMPLOYEE_LABEL = "(삭제된 직원)";

    public static LeaveRequestResponse from(LeaveRequest leaveRequest) {
        Employee rawEmployee = leaveRequest.getEmployee();
        Employee rawApprover = leaveRequest.getApprover();
        Employee employee = resolve(rawEmployee);
        Employee approver = resolve(rawApprover);

        return new LeaveRequestResponse(
                leaveRequest.getLeaveRequestId(),
                identifierOf(rawEmployee),
                employee != null ? employee.getName() : DELETED_EMPLOYEE_LABEL,
                employee != null ? employee.getEmployeeNo() : null,
                employee != null && employee.getDepartment() != null ? employee.getDepartment().getDepartmentId() : null,
                employee != null && employee.getDepartment() != null ? employee.getDepartment().getDepartmentName() : null,
                employee != null && employee.getPosition() != null ? employee.getPosition().getPositionName() : null,
                employee != null ? employee.getEmail() : null,
                leaveRequest.getLeaveType().getLeaveTypeId(),
                leaveRequest.getLeaveType().getLeaveTypeName(),
                leaveRequest.getStartDate(),
                leaveRequest.getEndDate(),
                leaveRequest.getLeaveDays(),
                leaveRequest.getReason(),
                leaveRequest.getStatus(),
                rawApprover != null ? identifierOf(rawApprover) : null,
                rawApprover != null ? (approver != null ? approver.getName() : DELETED_EMPLOYEE_LABEL) : null,
                leaveRequest.getRejectionReason(),
                leaveRequest.getProcessedAt(),
                leaveRequest.getCreatedAt()
        );
    }

    // 탈퇴(소프트 삭제)한 직원이 남긴 과거 휴가 신청도 화면에 그대로 표시되어야 하므로,
    // Employee의 전역 @SQLRestriction(deleted=false)로 인해 지연 로딩이 실패하는 경우를 방어한다.
    private static Employee resolve(Employee employee) {
        if (employee == null) {
            return null;
        }
        try {
            employee.getName();
            return employee;
        } catch (EntityNotFoundException e) {
            return null;
        }
    }

    private static Long identifierOf(Employee employee) {
        if (employee instanceof HibernateProxy proxy) {
            return (Long) proxy.getHibernateLazyInitializer().getIdentifier();
        }
        return employee.getEmployeeId();
    }
}
