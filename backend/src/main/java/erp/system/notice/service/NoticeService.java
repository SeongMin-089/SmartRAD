package erp.system.notice.service;

import erp.system.common.exception.BusinessException;
import erp.system.common.exception.ErrorCode;
import erp.system.employee.entity.Employee;
import erp.system.employee.repository.EmployeeRepository;
import erp.system.notice.dto.NoticeCreateRequest;
import erp.system.notice.dto.NoticeResponse;
import erp.system.notice.dto.NoticeSummaryResponse;
import erp.system.notice.dto.NoticeUpdateRequest;
import erp.system.notice.entity.Notice;
import erp.system.notice.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class NoticeService {

    private final NoticeRepository noticeRepository;
    private final EmployeeRepository employeeRepository;

    public Page<NoticeSummaryResponse> getList(String keyword, Pageable pageable) {
        String normalizedKeyword = StringUtils.hasText(keyword) ? keyword : null;
        return noticeRepository.search(normalizedKeyword, pageable).map(NoticeSummaryResponse::from);
    }

    @Transactional
    public NoticeResponse getById(Long noticeId) {
        Notice notice = findActive(noticeId);
        notice.increaseViewCount();
        return NoticeResponse.from(notice);
    }

    @Transactional
    public NoticeResponse create(Long writerId, NoticeCreateRequest request) {
        Employee writer = employeeRepository.findById(writerId)
                .orElseThrow(() -> new BusinessException(ErrorCode.EMPLOYEE_NOT_FOUND));

        Notice notice = Notice.builder()
                .writer(writer)
                .title(request.title())
                .content(request.content())
                .pinned(request.pinned())
                .build();

        return NoticeResponse.from(noticeRepository.save(notice));
    }

    @Transactional
    public NoticeResponse update(Long noticeId, NoticeUpdateRequest request) {
        Notice notice = findActive(noticeId);
        notice.update(request.title(), request.content(), request.pinned());
        return NoticeResponse.from(notice);
    }

    @Transactional
    public void delete(Long noticeId) {
        Notice notice = findActive(noticeId);
        notice.markDeleted();
    }

    private Notice findActive(Long noticeId) {
        return noticeRepository.findById(noticeId)
                .orElseThrow(() -> new BusinessException(ErrorCode.NOTICE_NOT_FOUND));
    }
}
