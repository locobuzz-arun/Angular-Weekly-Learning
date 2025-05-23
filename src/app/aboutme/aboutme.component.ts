import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-aboutme',
  imports:[CommonModule,FormsModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  demo: string = "Explore my skills and projects!";
  showDemoMessage: boolean = true;
  demoButtonColor: string = '#3b82f6';
  toshoW : boolean = false
  typedText: string = '';
  skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'Angular'] },
    { category: 'Backend', items: ['C#', 'ASP.NET Web API'] },
    { category: 'Database', items: ['SQL Server', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'Postman', 'Visual Studio'] }
  ];
  toggleDemoMessage() {
    this.showDemoMessage = !this.showDemoMessage;
    this.demoButtonColor = this.showDemoMessage ? '#3b82f6' : '#ef4444';
  }
  showTolls(){
    this.toshoW = !this.toshoW
  }
}