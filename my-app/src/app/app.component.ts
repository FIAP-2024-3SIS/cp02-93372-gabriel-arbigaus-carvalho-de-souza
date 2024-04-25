import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalPageComponent } from "./animal-page/animal-page.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AnimalPageComponent]
})
export class AppComponent {
  title = 'my-app';
}


