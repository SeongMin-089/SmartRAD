package erp.system.appointment.entity;

import erp.system.common.entity.DeleteTableEntity;
import erp.system.department.entity.Department;
import erp.system.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDate;

@Getter
@Entity
@Table(name = "employee_appointment")
@SQLRestriction("deleted=false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EmployeeAppointment extends DeleteTableEntity {

    public static final String TYPE_TRANSFER = "TRANSFER";
    public static final String TYPE_PROMOTION = "PROMOTION";
    public static final String TYPE_DEMOTION = "DEMOTION";
    public static final String TYPE_RESIGNATION = "RESIGNATION";
    public static final String TYPE_REINSTATEMENT = "REINSTATEMENT";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_appointment_id")
    private Long employeeAppointmentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "appointment_type", nullable = false, length = 30)
    private String appointmentType;

    @Column(name = "appointment_date", nullable = false)
    private LocalDate appointmentDate;

    @Column(name = "effective_date", nullable = false)
    private LocalDate effectiveDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_department_id")
    private Department fromDepartment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "to_department_id")
    private Department toDepartment;

    @Column(name = "from_position_name", length = 100)
    private String fromPositionName;

    @Column(name = "to_position_name", length = 100)
    private String toPositionName;

    @Column(name = "from_job_title", length = 100)
    private String fromJobTitle;

    @Column(name = "to_job_title", length = 100)
    private String toJobTitle;

    @Column(name = "reason", length = 500)
    private String reason;

    @Column(name = "memo", length = 1000)
    private String memo;

    @Builder
    public EmployeeAppointment(Employee employee, String appointmentType, LocalDate appointmentDate, LocalDate effectiveDate,
                               Department fromDepartment, Department toDepartment, String fromPositionName, String toPositionName,
                               String fromJobTitle, String toJobTitle, String reason, String memo) {
        this.employee = employee;
        this.appointmentType = appointmentType;
        this.appointmentDate = appointmentDate;
        this.effectiveDate = effectiveDate;
        this.fromDepartment = fromDepartment;
        this.toDepartment = toDepartment;
        this.fromPositionName = fromPositionName;
        this.toPositionName = toPositionName;
        this.fromJobTitle = fromJobTitle;
        this.toJobTitle = toJobTitle;
        this.reason = reason;
        this.memo = memo;
    }
}
