package erp.system.certificate.repository;

import erp.system.certificate.entity.EmployeeCertificateIssue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeCertificateIssueRepository extends JpaRepository<EmployeeCertificateIssue, Long> {

    List<EmployeeCertificateIssue> findAllByEmployee_EmployeeIdOrderByApplicationDateDesc(Long employeeId);

    boolean existsByApplicationNo(String applicationNo);
}
