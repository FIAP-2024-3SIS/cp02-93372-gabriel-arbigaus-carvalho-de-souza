import { Component, Input } from '@angular/core';
import { Animal } from '../models/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-item.component.html',
  styleUrl: './animal-item.component.css'
})


export class AnimalItemComponent {
  @Input() animals: Animal[] = []; 

}
