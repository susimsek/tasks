package com.therealdanvega.controller;

import com.therealdanvega.domain.Task;
import com.therealdanvega.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"","/"})
    public Iterable<Task> list(){
        return taskService.list();
    }

    @PostMapping("/save")
    public Task save(@RequestBody Task task){
        return taskService.save(task);
    }





}
