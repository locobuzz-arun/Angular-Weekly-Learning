import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [FormsModule,CommonModule],
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    comments: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Form submitted thanks a lot');
  }
}
