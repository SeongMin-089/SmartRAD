package erp.system.payroll.repository;

import erp.system.payroll.entity.PayrollItemMaster;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PayrollItemMasterRepository extends JpaRepository<PayrollItemMaster, Long> {

    List<PayrollItemMaster> findAllByItemTypeCodeAndActiveTrue(String itemTypeCode);
}
