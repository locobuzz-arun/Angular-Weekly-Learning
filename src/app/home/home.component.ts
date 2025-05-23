import { Component } from '@angular/core';
import { HeadercomponentComponent } from '../headercomponent/headercomponent.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-headercomponent></app-headercomponent>
    <app-aboutme></app-aboutme>
  `,
  imports: [HeadercomponentComponent, AboutmeComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
