package com.sms.backend.service;

import com.sms.backend.dto.StudentDTO;
import com.sms.backend.entity.Student;
import com.sms.backend.mapper.StudentMapper;
import com.sms.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentMapper studentMapper;

    public List<StudentDTO> getAllStudents() {
        return studentRepository.findAll().stream()
                .map(studentMapper::toDto)
                .collect(Collectors.toList());
    }

    public StudentDTO getStudentById(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        return studentMapper.toDto(student);
    }

    public StudentDTO createStudent(StudentDTO studentDTO) {
        Student student = studentMapper.toEntity(studentDTO);
        return studentMapper.toDto(studentRepository.save(student));
    }

    public StudentDTO updateStudent(Long id, StudentDTO studentDTO) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        
        // Update fields
        existingStudent.setFirstName(studentDTO.getFirstName());
        existingStudent.setLastName(studentDTO.getLastName());
        existingStudent.setEmail(studentDTO.getEmail());
        existingStudent.setPhone(studentDTO.getPhone());
        existingStudent.setDateOfBirth(studentDTO.getDateOfBirth());
        existingStudent.setGender(studentDTO.getGender());
        existingStudent.setAddress(studentDTO.getAddress());
        existingStudent.setRollNumber(studentDTO.getRollNumber());
        existingStudent.setStatus(studentDTO.getStatus());
        
        return studentMapper.toDto(studentRepository.save(existingStudent));
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public List<StudentDTO> searchStudents(String query) {
        return studentRepository.findByFirstNameContainingOrLastNameContaining(query, query).stream()
                .map(studentMapper::toDto)
                .collect(Collectors.toList());
    }
}
