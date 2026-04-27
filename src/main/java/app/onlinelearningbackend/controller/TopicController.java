package app.onlinelearningbackend.controller;

import app.onlinelearningbackend.model.Topic;
import app.onlinelearningbackend.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
@CrossOrigin("*")
public class TopicController {

    @Autowired
    private TopicRepository topicRepository;

    // Add topic (with YouTube URL)
    @PostMapping
    public Topic addTopic(@RequestBody Topic topic) {
        return topicRepository.save(topic);
    }

    // Get topics by course
    @GetMapping("/{courseId}")
    public List<Topic> getTopics(@PathVariable Long courseId) {
        return topicRepository.findByCourseId(courseId);
    }
}