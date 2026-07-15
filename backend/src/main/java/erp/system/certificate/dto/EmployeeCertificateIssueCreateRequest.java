package erp.system.certificate.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record EmployeeCertificateIssueCreateRequest(
        @NotNull(message = "사원은 필수입니다.") Long employeeId,
        @NotBlank(message = "증명서 종류는 필수입니다.") String certificateType,
        @Size(max = 500) String purpose,
        @Size(max = 1000) String memo
) {
}
