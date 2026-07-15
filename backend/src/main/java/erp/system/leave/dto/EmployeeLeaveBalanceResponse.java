package erp.system.leave.dto;

import erp.system.leave.entity.EmployeeLeaveBalance;

import java.math.BigDecimal;
import java.time.LocalDate;

public record EmployeeLeaveBalanceResponse(
        Long employeeLeaveBalanceId,
        Long employeeId,
        Long leaveTypeId,
        String leaveTypeName,
        BigDecimal totalDays,
        BigDecimal usedDays,
        BigDecimal remainDays,
        LocalDate expireDate
) {
    public static EmployeeLeaveBalanceResponse from(EmployeeLeaveBalance balance) {
        return new EmployeeLeaveBalanceResponse(
                balance.getEmployeeLeaveBalanceId(),
                balance.getEmployee().getEmployeeId(),
                balance.getLeaveType().getLeaveTypeId(),
                balance.getLeaveType().getLeaveTypeName(),
                balance.getTotalDays(),
                balance.getUsedDays(),
                balance.getRemainDays(),
                balance.getExpireDate()
        );
    }
}
