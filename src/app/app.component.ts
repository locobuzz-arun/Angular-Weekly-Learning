import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<app-aboutme></app-aboutme>`,
  styleUrls: ['./app.component.css'],
  imports: [AboutmeComponent]
})
export class AppComponent {
  title = 'homes';
}
