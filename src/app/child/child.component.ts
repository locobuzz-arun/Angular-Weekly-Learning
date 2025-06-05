// child.component.ts
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message!: string;
}
