import { Component, inject, signal } from '@angular/core';
import { Routines } from '../../services/routines';
import { Routine } from '../../models/routine';
import { catchError } from 'rxjs';
import { RoutineItem } from '../../components/routine-item/routine-item';

@Component({
  selector: 'app-routines',
  imports: [RoutineItem],
  templateUrl: './routines.html',
  styleUrl: './routines.scss',
})
export class RoutineManagement {
  routineService = inject(Routines);
  routineList = signal<Array<Routine>>([]);

  ngOnInit(): void {
    this.routineService
      .getAll()
      .pipe(
        catchError((err) => {
          console.log(err);

          throw err;
        }),
      )
      .subscribe((routines) => {
        this.routineList.set(routines);
      });
  }
}
