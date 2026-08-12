import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Routine } from '../models/routine';

@Service()
export class Routines {
    http = inject(HttpClient);

    getAll() {
        const url = `http://localhost:5223/api/routines`

        return this.http.get<Array<Routine>>(url);
    }
}
