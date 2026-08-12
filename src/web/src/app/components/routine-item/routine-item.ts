import { Component, input } from '@angular/core';
import { Routine } from '../../models/routine';

@Component({
  selector: 'app-routine-item',
  imports: [],
  templateUrl: './routine-item.html',
  styleUrl: './routine-item.scss',
})
export class RoutineItem {
  routine = input.required<Routine>();
}
