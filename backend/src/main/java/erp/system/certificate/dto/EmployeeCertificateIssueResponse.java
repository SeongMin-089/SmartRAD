package erp.system.certificate.dto;

import erp.system.certificate.entity.EmployeeCertificateIssue;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record EmployeeCertificateIssueResponse(
        Long employeeCertificateIssueId,
        Long employeeId,
        String employeeName,
        String applicationNo,
        String certificateType,
        LocalDate applicationDate,
        String issueStatus,
        LocalDateTime issuedAt,
        String approvalStatus,
        String purpose,
        String memo
) {
    public static EmployeeCertificateIssueResponse from(EmployeeCertificateIssue issue) {
        return new EmployeeCertificateIssueResponse(
                issue.getEmployeeCertificateIssueId(),
                issue.getEmployee().getEmployeeId(),
                issue.getEmployee().getName(),
                issue.getApplicationNo(),
                issue.getCertificateType(),
                issue.getApplicationDate(),
                issue.getIssueStatus(),
                issue.getIssuedAt(),
                issue.getApprovalStatus(),
                issue.getPurpose(),
                issue.getMemo()
        );
    }
}
