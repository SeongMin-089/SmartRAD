package erp.system.leave.dto;

import erp.system.leave.entity.LeavePolicy;

import java.math.BigDecimal;

public record LeavePolicyResponse(
        Long leavePolicyId,
        Long positionId,
        String positionName,
        BigDecimal annualLeaveDays,
        BigDecimal maxCarryOverDays,
        boolean halfDayAllowed,
        String note
) {
    public static LeavePolicyResponse from(LeavePolicy leavePolicy) {
        return new LeavePolicyResponse(
                leavePolicy.getLeavePolicyId(),
                leavePolicy.getPosition() != null ? leavePolicy.getPosition().getPositionId() : null,
                leavePolicy.getPosition() != null ? leavePolicy.getPosition().getPositionName() : null,
                leavePolicy.getAnnualLeaveDays(),
                leavePolicy.getMaxCarryOverDays(),
                leavePolicy.isHalfDayAllowed(),
                leavePolicy.getNote()
        );
    }
}
