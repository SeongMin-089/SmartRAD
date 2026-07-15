package erp.system.leave.repository;

import erp.system.leave.entity.EmployeeLeaveBalance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeLeaveBalanceRepository extends JpaRepository<EmployeeLeaveBalance, Long> {

    List<EmployeeLeaveBalance> findAllByEmployee_EmployeeId(Long employeeId);

    Optional<EmployeeLeaveBalance> findByEmployee_EmployeeIdAndLeaveType_LeaveTypeId(Long employeeId, Long leaveTypeId);
}
