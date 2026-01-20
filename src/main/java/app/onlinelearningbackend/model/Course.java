package app.onlinelearningbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "course")
public class Course {

    // setters (optional but recommended)
    // 🔴 REQUIRED BY JACKSON
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

}
