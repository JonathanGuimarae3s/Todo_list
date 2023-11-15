import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './page/home/home.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoInputAddItemsComponent,
    TodoButtonDeleteAllComponent,
    HeaderComponent,
    HomeComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
