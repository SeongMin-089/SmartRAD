package erp.system.leave.service;

import erp.system.leave.dto.LeaveTypeCreateRequest;
import erp.system.leave.dto.LeaveTypeResponse;
import erp.system.leave.entity.LeaveType;
import erp.system.leave.repository.LeaveTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LeaveTypeService {

    private final LeaveTypeRepository leaveTypeRepository;

    public List<LeaveTypeResponse> getAll() {
        return leaveTypeRepository.findAll().stream()
                .map(LeaveTypeResponse::from)
                .toList();
    }

    @Transactional
    public LeaveTypeResponse create(LeaveTypeCreateRequest request) {
        LeaveType leaveType = LeaveType.builder()
                .leaveTypeName(request.leaveTypeName())
                .paidYn(request.paidYn())
                .defaultDays(request.defaultDays())
                .note(request.note())
                .build();

        return LeaveTypeResponse.from(leaveTypeRepository.save(leaveType));
    }
}
