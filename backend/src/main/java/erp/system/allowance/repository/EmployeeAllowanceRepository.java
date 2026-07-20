package erp.system.allowance.repository;

import erp.system.allowance.entity.EmployeeAllowance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeAllowanceRepository extends JpaRepository<EmployeeAllowance, Long> {

    List<EmployeeAllowance> findAllByEmployee_EmployeeId(Long employeeId);

    Optional<EmployeeAllowance> findByEmployee_EmployeeIdAndAllowance_AllowanceId(Long employeeId, Long allowanceId);
}
