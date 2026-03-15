package com.sms.backend.mapper;

import com.sms.backend.dto.TeacherDTO;
import com.sms.backend.entity.Teacher;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TeacherMapper {
    TeacherDTO toDto(Teacher teacher);

    Teacher toEntity(TeacherDTO teacherDTO);
}
