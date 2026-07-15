package erp.system.notice.dto;

import erp.system.notice.entity.Notice;

import java.time.LocalDateTime;

public record NoticeResponse(
        Long noticeId,
        Long writerId,
        String writerName,
        String title,
        String content,
        boolean pinned,
        int viewCount,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
    public static NoticeResponse from(Notice notice) {
        return new NoticeResponse(
                notice.getNoticeId(),
                notice.getWriter().getEmployeeId(),
                notice.getWriter().getName(),
                notice.getTitle(),
                notice.getContent(),
                notice.isPinned(),
                notice.getViewCount(),
                notice.getCreatedAt(),
                notice.getUpdatedAt()
        );
    }
}
