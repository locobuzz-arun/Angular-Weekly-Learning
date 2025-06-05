// parent.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'; 

@Component({
  standalone: true,
  selector: 'app-parent',
  imports: [ChildComponent], 
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = 'Message from Parent : Study well';
}
