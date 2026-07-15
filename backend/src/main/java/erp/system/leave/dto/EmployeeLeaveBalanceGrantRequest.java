package erp.system.leave.dto;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record EmployeeLeaveBalanceGrantRequest(
        @NotNull(message = "사원은 필수입니다.") Long employeeId,
        @NotNull(message = "휴가 유형은 필수입니다.") Long leaveTypeId,
        @NotNull(message = "부여 일수는 필수입니다.") BigDecimal totalDays,
        LocalDate expireDate
) {
}
