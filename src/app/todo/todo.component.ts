import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditTaskComponent } from '../edittask/edittask.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, EditTaskComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: { title: string; completed: boolean }[] = [];
  newTask: string = '';
  editingIndex = -1;

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.editingIndex === index) this.editingIndex = -1; // stop editing if removed
  }

  toggleCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  startEdit(index: number) {
    this.editingIndex = index;
  }

  saveEdit(newTitle: string) {
    if (newTitle) {
      this.tasks[this.editingIndex].title = newTitle;
    }
    this.editingIndex = -1;
  }

  cancelEdit() {
    this.editingIndex = -1;
  }
}
