package erp.system.payroll.repository;

import erp.system.payroll.entity.PayrollDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PayrollDetailRepository extends JpaRepository<PayrollDetail, Long> {

    List<PayrollDetail> findAllByPayroll_PayrollId(Long payrollId);

    void deleteAllByPayroll_PayrollId(Long payrollId);
}
