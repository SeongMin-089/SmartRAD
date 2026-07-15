package erp.system.payroll.entity;

import erp.system.common.entity.DeleteTableEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.math.BigDecimal;

@Getter
@Entity
@Table(name = "payroll_detail")
@SQLRestriction("deleted=false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PayrollDetail extends DeleteTableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payroll_detail_id")
    private Long payrollDetailId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payroll_id", nullable = false)
    private Payroll payroll;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payroll_item_master_id")
    private PayrollItemMaster payrollItemMaster;

    @Column(name = "item_name_snapshot", nullable = false, length = 100)
    private String itemNameSnapshot;

    @Column(name = "item_type_code", nullable = false, length = 30)
    private String itemTypeCode;

    @Column(name = "amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal amount;

    @Builder
    public PayrollDetail(Payroll payroll, PayrollItemMaster payrollItemMaster, String itemNameSnapshot, String itemTypeCode, BigDecimal amount) {
        this.payroll = payroll;
        this.payrollItemMaster = payrollItemMaster;
        this.itemNameSnapshot = itemNameSnapshot;
        this.itemTypeCode = itemTypeCode;
        this.amount = amount;
    }
}
