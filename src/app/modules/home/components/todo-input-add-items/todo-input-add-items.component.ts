import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {


  @Output() public emitItemAddItemTaskList = new EventEmitter();
  public addItemTaskList: string = "";
  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {

      this.emitItemAddItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }

  }
}
