package erp.system.certificate.entity;

import erp.system.common.entity.DeleteTableEntity;
import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "employee_certificate_issue")
@SQLRestriction("deleted=false")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EmployeeCertificateIssue extends DeleteTableEntity {

    public static final String TYPE_EMPLOYMENT = "EMPLOYMENT";
    public static final String TYPE_CAREER = "CAREER";

    public static final String APPROVAL_PENDING = "PENDING";
    public static final String APPROVAL_APPROVED = "APPROVED";
    public static final String APPROVAL_REJECTED = "REJECTED";

    public static final String ISSUE_NOT_ISSUED = "NOT_ISSUED";
    public static final String ISSUE_ISSUED = "ISSUED";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_certificate_issue_id")
    private Long employeeCertificateIssueId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "application_no", nullable = false, length = 30, unique = true)
    private String applicationNo;

    @Column(name = "certificate_type", nullable = false, length = 30)
    private String certificateType;

    @Column(name = "application_date", nullable = false)
    private LocalDate applicationDate;

    @Column(name = "issue_status", nullable = false, length = 30)
    private String issueStatus;

    @Column(name = "issued_at")
    private LocalDateTime issuedAt;

    @Column(name = "approval_status", nullable = false, length = 30)
    private String approvalStatus;

    @Column(name = "purpose", length = 500)
    private String purpose;

    @Column(name = "memo", length = 1000)
    private String memo;

    @Builder
    public EmployeeCertificateIssue(Employee employee, String applicationNo, String certificateType,
                                    LocalDate applicationDate, String purpose, String memo) {
        this.employee = employee;
        this.applicationNo = applicationNo;
        this.certificateType = certificateType;
        this.applicationDate = applicationDate;
        this.purpose = purpose;
        this.memo = memo;
        this.approvalStatus = APPROVAL_PENDING;
        this.issueStatus = ISSUE_NOT_ISSUED;
    }

    public void approve() {
        this.approvalStatus = APPROVAL_APPROVED;
    }

    public void reject(String memo) {
        this.approvalStatus = APPROVAL_REJECTED;
        this.memo = memo;
    }

    public void issue() {
        if (!APPROVAL_APPROVED.equals(this.approvalStatus)) {
            throw new BusinessException(ErrorCode.VALIDATION_ERROR, "승인되지 않은 신청은 발급할 수 없습니다.");
        }
        this.issueStatus = ISSUE_ISSUED;
        this.issuedAt = LocalDateTime.now();
    }
}
