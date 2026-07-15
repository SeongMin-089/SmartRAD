package erp.system.payroll.repository;

import erp.system.payroll.entity.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface PayrollRepository extends JpaRepository<Payroll, Long>, JpaSpecificationExecutor<Payroll> {

    Optional<Payroll> findByEmployee_EmployeeIdAndPayrollYearMonth(Long employeeId, String payrollYearMonth);
}
