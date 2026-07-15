package erp.system.allowance.dto;

import erp.system.allowance.entity.Allowance;

public record AllowanceResponse(
        Long allowanceId,
        String allowanceName,
        boolean taxable,
        boolean fixed
) {
    public static AllowanceResponse from(Allowance allowance) {
        return new AllowanceResponse(
                allowance.getAllowanceId(),
                allowance.getAllowanceName(),
                allowance.isTaxable(),
                allowance.isFixed()
        );
    }
}
