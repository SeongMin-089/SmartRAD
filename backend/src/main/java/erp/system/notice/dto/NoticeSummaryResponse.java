package erp.system.notice.dto;

import erp.system.notice.entity.Notice;

import java.time.LocalDateTime;

public record NoticeSummaryResponse(
        Long noticeId,
        String writerName,
        String title,
        boolean pinned,
        int viewCount,
        LocalDateTime createdAt
) {
    public static NoticeSummaryResponse from(Notice notice) {
        return new NoticeSummaryResponse(
                notice.getNoticeId(),
                notice.getWriter().getName(),
                notice.getTitle(),
                notice.isPinned(),
                notice.getViewCount(),
                notice.getCreatedAt()
        );
    }
}
