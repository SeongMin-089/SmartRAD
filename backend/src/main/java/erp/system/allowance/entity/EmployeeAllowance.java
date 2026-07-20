package erp.system.allowance.entity;

import erp.system.common.entity.BaseEntity;
import erp.system.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;

@Getter
@Entity
@Table(name = "employee_allowance")
@SQLRestriction("deleted=false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EmployeeAllowance extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_allowance_id")
    private Long employeeAllowanceId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "allowance_id", nullable = false)
    private Allowance allowance;

    @Column(name = "amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal amount;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Builder
    public EmployeeAllowance(Employee employee, Allowance allowance, BigDecimal amount, LocalDate startDate, LocalDate endDate) {
        this.employee = employee;
        this.allowance = allowance;
        this.amount = amount;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public void updateAmount(BigDecimal amount, LocalDate startDate, LocalDate endDate) {
        this.amount = amount;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public boolean appliesTo(YearMonth yearMonth) {
        if (!isActive()) {
            return false;
        }
        boolean startsBeforeOrDuring = startDate == null || !startDate.isAfter(yearMonth.atEndOfMonth());
        boolean endsAfterOrDuring = endDate == null || !endDate.isBefore(yearMonth.atDay(1));
        return startsBeforeOrDuring && endsAfterOrDuring;
    }
}
