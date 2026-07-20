package erp.system.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record ResetPasswordRequest(
        @NotBlank(message = "사번은 필수입니다.") String employeeNo,
        @NotBlank(message = "이메일은 필수입니다.") String email,
        @NotNull(message = "생년월일은 필수입니다.") LocalDate birthDate,
        @NotBlank(message = "새 비밀번호는 필수입니다.") @Size(min = 4, message = "비밀번호는 4자 이상이어야 합니다.") String newPassword
) {
}
