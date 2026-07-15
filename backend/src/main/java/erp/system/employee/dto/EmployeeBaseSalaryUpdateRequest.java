package erp.system.employee.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;

public record EmployeeBaseSalaryUpdateRequest(
        @NotNull(message = "기본급은 필수입니다.") @PositiveOrZero(message = "기본급은 0 이상이어야 합니다.") BigDecimal baseSalary
) {
}
