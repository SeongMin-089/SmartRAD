package erp.system.allowance.dto;

import erp.system.allowance.entity.EmployeeAllowance;

import java.math.BigDecimal;
import java.time.LocalDate;

public record EmployeeAllowanceResponse(
        Long employeeAllowanceId,
        Long employeeId,
        Long allowanceId,
        String allowanceName,
        BigDecimal amount,
        LocalDate startDate,
        LocalDate endDate,
        boolean active
) {
    public static EmployeeAllowanceResponse from(EmployeeAllowance employeeAllowance) {
        return new EmployeeAllowanceResponse(
                employeeAllowance.getEmployeeAllowanceId(),
                employeeAllowance.getEmployee().getEmployeeId(),
                employeeAllowance.getAllowance().getAllowanceId(),
                employeeAllowance.getAllowance().getAllowanceName(),
                employeeAllowance.getAmount(),
                employeeAllowance.getStartDate(),
                employeeAllowance.getEndDate(),
                employeeAllowance.isActive()
        );
    }
}
