package erp.system.leave.dto;

import erp.system.leave.entity.LeaveRequest;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record LeaveRequestResponse(
        Long leaveRequestId,
        Long employeeId,
        String employeeName,
        Long leaveTypeId,
        String leaveTypeName,
        LocalDate startDate,
        LocalDate endDate,
        BigDecimal leaveDays,
        String reason,
        String status,
        Long approverId,
        String approverName,
        LocalDateTime createdAt
) {
    public static LeaveRequestResponse from(LeaveRequest leaveRequest) {
        return new LeaveRequestResponse(
                leaveRequest.getLeaveRequestId(),
                leaveRequest.getEmployee().getEmployeeId(),
                leaveRequest.getEmployee().getName(),
                leaveRequest.getLeaveType().getLeaveTypeId(),
                leaveRequest.getLeaveType().getLeaveTypeName(),
                leaveRequest.getStartDate(),
                leaveRequest.getEndDate(),
                leaveRequest.getLeaveDays(),
                leaveRequest.getReason(),
                leaveRequest.getStatus(),
                leaveRequest.getApprover() != null ? leaveRequest.getApprover().getEmployeeId() : null,
                leaveRequest.getApprover() != null ? leaveRequest.getApprover().getName() : null,
                leaveRequest.getCreatedAt()
        );
    }
}
