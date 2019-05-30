import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue:string=null;

  constructor(private taskService:TaskService,private datePipe: DatePipe) { }

  ngOnInit() {
  }

    onTaskAdd(event){
        let task:Task=new Task(event.target.value,false,this.getTodayAsString());
        this.taskService.addTask(task)
            .subscribe(
                (newTask:Task)=>{
                    //clear the input
                    this.addTaskValue=' ';
                    this.taskService.onTaskAdded.emit(newTask);
                },
                (error)=>console.log(error)

            )
    }

    getTodayAsString(){
        return  this.datePipe.transform(new Date(), 'MM/dd/yyyy');

    }

}


