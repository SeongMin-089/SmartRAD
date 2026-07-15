package erp.system.certificate.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record EmployeeCertificateIssueRejectRequest(
        @NotBlank(message = "반려 사유는 필수입니다.") @Size(max = 1000) String memo
) {
}
