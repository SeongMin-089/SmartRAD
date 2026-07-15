package erp.system.allowance.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AllowanceCreateRequest(
        @NotBlank(message = "수당명은 필수입니다.") @Size(max = 100) String allowanceName,
        boolean taxable,
        boolean fixed
) {
}
