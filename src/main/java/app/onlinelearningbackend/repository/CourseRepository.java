package app.onlinelearningbackend.repository;

import app.onlinelearningbackend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}

