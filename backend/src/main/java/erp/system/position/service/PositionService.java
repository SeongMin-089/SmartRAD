package erp.system.position.service;

import erp.system.position.dto.PositionCreateRequest;
import erp.system.position.dto.PositionResponse;
import erp.system.position.entity.Position;
import erp.system.position.repository.PositionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PositionService {

    private final PositionRepository positionRepository;

    public List<PositionResponse> getAll() {
        return positionRepository.findAll().stream()
                .map(PositionResponse::from)
                .toList();
    }

    @Transactional
    public PositionResponse create(PositionCreateRequest request) {
        Position position = Position.builder()
                .positionName(request.positionName())
                .level(request.level())
                .build();

        return PositionResponse.from(positionRepository.save(position));
    }
}
