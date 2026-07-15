package erp.system.allowance.repository;

import erp.system.allowance.entity.EmployeeAllowance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeAllowanceRepository extends JpaRepository<EmployeeAllowance, Long> {

    List<EmployeeAllowance> findAllByEmployee_EmployeeId(Long employeeId);
}
