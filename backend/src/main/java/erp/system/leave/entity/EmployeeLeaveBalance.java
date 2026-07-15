package erp.system.leave.entity;

import erp.system.common.entity.CreatedAtEntity;
import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "employee_leave_balance")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EmployeeLeaveBalance extends CreatedAtEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_leave_balance_id")
    private Long employeeLeaveBalanceId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "leave_type_id", nullable = false)
    private LeaveType leaveType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "total_days", nullable = false, precision = 5, scale = 1)
    private BigDecimal totalDays;

    @Column(name = "used_days", nullable = false, precision = 5, scale = 1)
    private BigDecimal usedDays;

    @Column(name = "remain_days", nullable = false, precision = 5, scale = 1)
    private BigDecimal remainDays;

    @Column(name = "expire_date")
    private LocalDate expireDate;

    @Builder
    public EmployeeLeaveBalance(LeaveType leaveType, Employee employee, BigDecimal totalDays, LocalDate expireDate) {
        this.leaveType = leaveType;
        this.employee = employee;
        this.totalDays = totalDays;
        this.usedDays = BigDecimal.ZERO;
        this.remainDays = totalDays;
        this.expireDate = expireDate;
    }

    public void use(BigDecimal days) {
        if (this.remainDays.compareTo(days) < 0) {
            throw new BusinessException(ErrorCode.INSUFFICIENT_LEAVE_BALANCE);
        }
        this.usedDays = this.usedDays.add(days);
        this.remainDays = this.remainDays.subtract(days);
    }

    public void restore(BigDecimal days) {
        this.usedDays = this.usedDays.subtract(days);
        this.remainDays = this.remainDays.add(days);
    }
}
