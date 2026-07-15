package erp.system.payroll.dto;

import jakarta.validation.constraints.NotNull;

import java.time.YearMonth;

public record PayrollCalculateRequest(
        @NotNull(message = "사원은 필수입니다.") Long employeeId,
        @NotNull(message = "급여 대상 연월은 필수입니다.") YearMonth payrollYearMonth
) {
}
