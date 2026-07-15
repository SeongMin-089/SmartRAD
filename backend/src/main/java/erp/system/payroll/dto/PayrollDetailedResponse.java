package erp.system.payroll.dto;

import erp.system.payroll.entity.Payroll;
import erp.system.payroll.entity.PayrollDetail;

import java.util.List;

public record PayrollDetailedResponse(
        PayrollResponse payroll,
        List<PayrollDetailLineResponse> details
) {
    public static PayrollDetailedResponse of(Payroll payroll, List<PayrollDetail> details) {
        return new PayrollDetailedResponse(
                PayrollResponse.from(payroll),
                details.stream().map(PayrollDetailLineResponse::from).toList()
        );
    }
}
