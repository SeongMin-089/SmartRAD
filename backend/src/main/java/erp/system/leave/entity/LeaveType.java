package erp.system.leave.entity;

import erp.system.common.entity.CreatedAtEntity;
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

import java.math.BigDecimal;

@Getter
@Entity
@Table(name = "leave_type")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LeaveType extends CreatedAtEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "leave_type_id")
    private Long leaveTypeId;

    @Column(name = "leave_type_name", nullable = false, length = 100)
    private String leaveTypeName;

    @Column(name = "paid_yn", nullable = false)
    private boolean paidYn;

    @Column(name = "default_days", precision = 4, scale = 1)
    private BigDecimal defaultDays;

    @Column(name = "note", length = 255)
    private String note;

    @Builder
    public LeaveType(String leaveTypeName, boolean paidYn, BigDecimal defaultDays, String note) {
        this.leaveTypeName = leaveTypeName;
        this.paidYn = paidYn;
        this.defaultDays = defaultDays;
        this.note = note;
    }
}
