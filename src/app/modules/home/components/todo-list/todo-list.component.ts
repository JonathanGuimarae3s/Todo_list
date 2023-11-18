import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/interface/taskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("task") || '[]');

  ngDoCheck(): void {

    this.setLocalStorage();
  }


  public setEmitTaskList(event: string) {
    this.taskList.unshift({ task: event, checked: false });

  }
  public deleteAllTaskList() {

    const confirm = window.confirm("Voce quer deletar tudo??");
    if (confirm) {
      this.taskList = [];
    }

  }
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task esta vazia, deseja deletar?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }

    }
  }

  public deleteItemTaskList(event: number) {


    this.taskList.splice(event, 1);
  }
  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("task", JSON.stringify(this.taskList));
    }
  }

}
