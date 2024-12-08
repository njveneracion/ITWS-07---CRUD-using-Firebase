import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirebaseComponent } from './firebase/firebase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FirebaseComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing';
}
