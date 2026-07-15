package erp.system.leave.repository;

import erp.system.leave.entity.LeavePolicy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeavePolicyRepository extends JpaRepository<LeavePolicy, Long> {
}
