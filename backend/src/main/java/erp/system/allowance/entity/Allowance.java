package erp.system.allowance.entity;

import erp.system.common.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

@Getter
@Entity
@Table(name = "allowance")
@SQLRestriction("deleted=false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Allowance extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "allowance_id")
    private Long allowanceId;

    @Column(name = "allowance_name", nullable = false, length = 100)
    private String allowanceName;

    @Column(name = "taxable", nullable = false)
    private boolean taxable;

    @Column(name = "fixed", nullable = false)
    private boolean fixed;

    @Builder
    public Allowance(String allowanceName, boolean taxable, boolean fixed) {
        this.allowanceName = allowanceName;
        this.taxable = taxable;
        this.fixed = fixed;
    }
}
