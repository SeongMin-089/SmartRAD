package erp.system.allowance.repository;

import erp.system.allowance.entity.Allowance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AllowanceRepository extends JpaRepository<Allowance, Long> {
}
