package erp.system.common.exception;

import org.springframework.http.HttpStatus;

public enum ErrorCode {
    VALIDATION_ERROR(HttpStatus.BAD_REQUEST, "요청 값이 올바르지 않습니다."),
    INVALID_CREDENTIALS(HttpStatus.UNAUTHORIZED, "아이디 또는 비밀번호가 올바르지 않습니다."),
    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "인증이 필요합니다."),
    ACCOUNT_INACTIVE(HttpStatus.UNAUTHORIZED, "비활성화된 계정입니다."),
    DEPARTMENT_NOT_FOUND(HttpStatus.NOT_FOUND, "부서를 찾을 수 없습니다."),
    POSITION_NOT_FOUND(HttpStatus.NOT_FOUND, "직책을 찾을 수 없습니다."),
    EMPLOYMENT_TYPE_NOT_FOUND(HttpStatus.NOT_FOUND, "사원타입을 찾을 수 없습니다."),
    EMPLOYEE_NOT_FOUND(HttpStatus.NOT_FOUND, "사원을 찾을 수 없습니다."),
    DUPLICATE_EMPLOYEE_NO(HttpStatus.CONFLICT, "이미 사용 중인 사번입니다."),
    DUPLICATE_EMAIL(HttpStatus.CONFLICT, "이미 사용 중인 이메일입니다."),
    APPOINTMENT_NOT_FOUND(HttpStatus.NOT_FOUND, "발령 이력을 찾을 수 없습니다."),
    EVENT_SUPPORT_NOT_FOUND(HttpStatus.NOT_FOUND, "경조비 신청 내역을 찾을 수 없습니다."),
    CERTIFICATE_ISSUE_NOT_FOUND(HttpStatus.NOT_FOUND, "증명서 발급 내역을 찾을 수 없습니다."),
    ATTENDANCE_NOT_FOUND(HttpStatus.NOT_FOUND, "근태 기록을 찾을 수 없습니다."),
    ALREADY_CHECKED_IN(HttpStatus.CONFLICT, "이미 출근 처리되었습니다."),
    NOT_CHECKED_IN(HttpStatus.BAD_REQUEST, "출근 기록이 없습니다."),
    ALREADY_CHECKED_OUT(HttpStatus.CONFLICT, "이미 퇴근 처리되었습니다."),
    LEAVE_TYPE_NOT_FOUND(HttpStatus.NOT_FOUND, "휴가 유형을 찾을 수 없습니다."),
    LEAVE_POLICY_NOT_FOUND(HttpStatus.NOT_FOUND, "휴가 정책을 찾을 수 없습니다."),
    LEAVE_BALANCE_NOT_FOUND(HttpStatus.NOT_FOUND, "잔여 휴가 정보를 찾을 수 없습니다."),
    LEAVE_REQUEST_NOT_FOUND(HttpStatus.NOT_FOUND, "휴가 신청 내역을 찾을 수 없습니다."),
    INSUFFICIENT_LEAVE_BALANCE(HttpStatus.BAD_REQUEST, "잔여 휴가가 부족합니다."),
    INVALID_LEAVE_REQUEST_STATUS(HttpStatus.BAD_REQUEST, "이미 처리된 휴가 신청입니다."),
    INTERNAL_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 오류가 발생했습니다.");


    private final HttpStatus status;
    private final String defaultMessage;
    ErrorCode(HttpStatus status, String defaultMessage) {
        this.status = status;
        this.defaultMessage = defaultMessage;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public String getDefaultMessage() {
        return defaultMessage;
    }
}
