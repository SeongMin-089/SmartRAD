package erp.system.allowance.service;

import erp.system.allowance.dto.AllowanceCreateRequest;
import erp.system.allowance.dto.AllowanceResponse;
import erp.system.allowance.entity.Allowance;
import erp.system.allowance.repository.AllowanceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AllowanceService {

    private final AllowanceRepository allowanceRepository;

    public List<AllowanceResponse> getAll() {
        return allowanceRepository.findAll().stream()
                .map(AllowanceResponse::from)
                .toList();
    }

    @Transactional
    public AllowanceResponse create(AllowanceCreateRequest request) {
        Allowance allowance = Allowance.builder()
                .allowanceName(request.allowanceName())
                .taxable(request.taxable())
                .fixed(request.fixed())
                .build();

        return AllowanceResponse.from(allowanceRepository.save(allowance));
    }
}
