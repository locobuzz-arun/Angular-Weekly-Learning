import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // ✅ Import routes array directly

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
