package app.onlinelearningbackend.repository;

import app.onlinelearningbackend.model.Notepad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotepadRepository extends JpaRepository<Notepad, Long> {

    List<Notepad> findByUserId(Long userId);
}