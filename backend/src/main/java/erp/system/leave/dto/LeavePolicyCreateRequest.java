package erp.system.leave.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

public record LeavePolicyCreateRequest(
        @NotNull(message = "직책은 필수입니다.") Long positionId,
        BigDecimal annualLeaveDays,
        BigDecimal maxCarryOverDays,
        boolean halfDayAllowed,
        @Size(max = 255) String note
) {
}
