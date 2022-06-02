import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor() { }

  actions: string[] = ['Giặt đồ', 'Nấu cơm', 'Quét nhà'];

  getAllAction(): string[] {
    return this.actions;
  }

  addAction(action: string): void {
    this.actions.push(action);
  }

  deleteAction(action: string): void {
    this.actions = this.actions.filter(a => a !== action);
  }
}
