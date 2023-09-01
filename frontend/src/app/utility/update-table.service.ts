import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateTableService {

  constructor() { }

  private updateTableSubject = new Subject<void>();

  updateTable$ = this.updateTableSubject.asObservable();

  notifyTableUpdate() {
    this.updateTableSubject.next();
  }
}
