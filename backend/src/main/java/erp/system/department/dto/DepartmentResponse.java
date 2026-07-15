package erp.system.department.dto;

import erp.system.department.entity.Department;

public record DepartmentResponse(
        Long departmentId,
        String departmentName,
        Long parentDepartmentId,
        String parentDepartmentName
) {
    public static DepartmentResponse from(Department department) {
        Department parent = department.getParentDepartment();
        return new DepartmentResponse(
                department.getDepartmentId(),
                department.getDepartmentName(),
                parent != null ? parent.getDepartmentId() : null,
                parent != null ? parent.getDepartmentName() : null
        );
    }
}
