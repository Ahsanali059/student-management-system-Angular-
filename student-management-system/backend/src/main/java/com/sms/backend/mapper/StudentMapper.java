package com.sms.backend.mapper;

import com.sms.backend.dto.StudentDTO;
import com.sms.backend.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    @Mapping(source = "schoolClass.id", target = "classId")
    @Mapping(source = "schoolClass.className", target = "className")
    StudentDTO toDto(Student student);

    @Mapping(source = "classId", target = "schoolClass.id")
    Student toEntity(StudentDTO studentDTO);
}
