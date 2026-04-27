package app.onlinelearningbackend.controller;

import app.onlinelearningbackend.model.Notepad;
import app.onlinelearningbackend.repository.NotepadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notepad")
@CrossOrigin("*")
public class NotepadController {

    @Autowired
    private NotepadRepository notepadRepository;

    @PostMapping
    public Notepad saveNote(@RequestBody Notepad note) {
        return notepadRepository.save(note);
    }

    @GetMapping("/{userId}")
    public List<Notepad> getNotes(@PathVariable Long userId) {
        return notepadRepository.findByUserId(userId);
    }
}