package erp.system.payroll.dto;

import erp.system.payroll.entity.PayrollItemMaster;

import java.math.BigDecimal;

public record PayrollItemMasterResponse(
        Long payrollItemMasterId,
        String itemName,
        String itemTypeCode,
        boolean taxable,
        boolean fixed,
        BigDecimal defaultAmount,
        BigDecimal rate,
        boolean active
) {
    public static PayrollItemMasterResponse from(PayrollItemMaster item) {
        return new PayrollItemMasterResponse(
                item.getPayrollItemMasterId(),
                item.getItemName(),
                item.getItemTypeCode(),
                item.isTaxable(),
                item.isFixed(),
                item.getDefaultAmount(),
                item.getRate(),
                item.isActive()
        );
    }
}
