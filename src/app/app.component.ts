import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HeadercomponentComponent,LoginComponent,AboutmeComponent,RouterOutlet]
})
export class AppComponent {
  title = 'App';
}
