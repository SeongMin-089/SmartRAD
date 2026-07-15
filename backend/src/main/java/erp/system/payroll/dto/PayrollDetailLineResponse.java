package erp.system.payroll.dto;

import erp.system.payroll.entity.PayrollDetail;

import java.math.BigDecimal;

public record PayrollDetailLineResponse(
        Long payrollDetailId,
        Long payrollItemMasterId,
        String itemName,
        String itemTypeCode,
        BigDecimal amount
) {
    public static PayrollDetailLineResponse from(PayrollDetail detail) {
        return new PayrollDetailLineResponse(
                detail.getPayrollDetailId(),
                detail.getPayrollItemMaster() != null ? detail.getPayrollItemMaster().getPayrollItemMasterId() : null,
                detail.getItemNameSnapshot(),
                detail.getItemTypeCode(),
                detail.getAmount()
        );
    }
}
