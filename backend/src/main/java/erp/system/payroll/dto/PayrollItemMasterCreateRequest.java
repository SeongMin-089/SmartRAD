package erp.system.payroll.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

public record PayrollItemMasterCreateRequest(
        @NotBlank(message = "항목명은 필수입니다.") @Size(max = 100) String itemName,
        @NotBlank(message = "항목 유형은 필수입니다.") String itemTypeCode,
        boolean taxable,
        boolean fixed,
        BigDecimal defaultAmount,
        BigDecimal rate
) {
}
