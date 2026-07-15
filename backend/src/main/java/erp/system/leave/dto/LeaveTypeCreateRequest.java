package erp.system.leave.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

public record LeaveTypeCreateRequest(
        @NotBlank(message = "휴가 유형명은 필수입니다.") @Size(max = 100) String leaveTypeName,
        boolean paidYn,
        BigDecimal defaultDays,
        @Size(max = 255) String note
) {
}
