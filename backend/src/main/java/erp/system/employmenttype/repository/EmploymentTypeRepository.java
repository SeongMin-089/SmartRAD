package erp.system.employmenttype.repository;

import erp.system.employmenttype.entity.EmploymentType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmploymentTypeRepository extends JpaRepository<EmploymentType, Long> {
}
