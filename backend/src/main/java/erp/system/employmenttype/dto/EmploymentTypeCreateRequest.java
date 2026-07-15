package erp.system.employmenttype.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record EmploymentTypeCreateRequest(
        @NotBlank(message = "고용형태명은 필수입니다.") @Size(max = 100) String employmentTypeName
) {
}
