import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="editedTitle" />
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
  `
})
export class EditTaskComponent {
  @Input() title!: string;
  @Output() saveTask = new EventEmitter<string>();
  @Output() cancelEdit = new EventEmitter<void>();

  editedTitle!: string;

  ngOnInit() {
    this.editedTitle = this.title;
  }

  save() {
    this.saveTask.emit(this.editedTitle.trim());
  }

  cancel() {
    this.cancelEdit.emit();
  }
}
