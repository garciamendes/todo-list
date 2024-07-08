import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { NgIconComponent } from '@ng-icons/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { authGuardGuard } from './guards/auth-guard.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskComponent,
    HomeComponent,
    NgIconComponent,
    ReactiveFormsModule,
    AuthComponent
  ],
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
