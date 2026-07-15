package erp.system.allowance.dto;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record EmployeeAllowanceCreateRequest(
        @NotNull(message = "사원은 필수입니다.") Long employeeId,
        @NotNull(message = "수당 유형은 필수입니다.") Long allowanceId,
        @NotNull(message = "금액은 필수입니다.") BigDecimal amount,
        LocalDate startDate,
        LocalDate endDate
) {
}
