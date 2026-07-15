package erp.system.position.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record PositionCreateRequest(
        @NotBlank(message = "직책명은 필수입니다.") @Size(max = 100) String positionName,
        Integer level
) {
}
