package app.onlinelearningbackend.service;

import app.onlinelearningbackend.model.Course;
import app.onlinelearningbackend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    // ✅ Get all courses
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // ✅ Add course
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    // ✅ Get by ID
    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    // ✅ Delete course
    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}