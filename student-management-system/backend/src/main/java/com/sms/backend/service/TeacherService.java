package com.sms.backend.service;

import com.sms.backend.dto.TeacherDTO;
import com.sms.backend.entity.Teacher;
import com.sms.backend.mapper.TeacherMapper;
import com.sms.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private TeacherMapper teacherMapper;

    public List<TeacherDTO> getAllTeachers() {
        return teacherRepository.findAll().stream()
                .map(teacherMapper::toDto)
                .collect(Collectors.toList());
    }

    public TeacherDTO getTeacherById(Long id) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found"));
        return teacherMapper.toDto(teacher);
    }

    public TeacherDTO createTeacher(TeacherDTO teacherDTO) {
        Teacher teacher = teacherMapper.toEntity(teacherDTO);
        return teacherMapper.toDto(teacherRepository.save(teacher));
    }

    public TeacherDTO updateTeacher(Long id, TeacherDTO teacherDTO) {
        Teacher existingTeacher = teacherRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Teacher not found"));

        existingTeacher.setName(teacherDTO.getName());
        existingTeacher.setEmail(teacherDTO.getEmail());
        existingTeacher.setPhone(teacherDTO.getPhone());
        existingTeacher.setQualification(teacherDTO.getQualification());
        existingTeacher.setExperience(teacherDTO.getExperience());

        return teacherMapper.toDto(teacherRepository.save(existingTeacher));
    }

    public void deleteTeacher(Long id) {
        teacherRepository.deleteById(id);
    }
}
