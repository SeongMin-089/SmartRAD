package erp.system.employmenttype.entity;

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
import lombok.Setter;
import org.hibernate.annotations.SQLRestriction;

@Getter
@Setter
@Entity
@Table(name = "employment_type")
@SQLRestriction("deleted=false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EmploymentType extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employment_type_id")
    private Long employmentTypeId;

    @Column(name = "employment_type_name", nullable = false, length = 100)
    private String employmentTypeName;

    @Builder
    public EmploymentType(String employmentTypeName) {
        this.employmentTypeName = employmentTypeName;
    }

    public void update(String employmentTypeName) {
        this.employmentTypeName = employmentTypeName;
    }
}
