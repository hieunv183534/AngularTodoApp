import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.listAction = this.actionService.getAllAction();
  }

  listAction: string[] = [];

  // @Output() editActionEvent = new EventEmitter<string>();

  deleteAction(action: string): void {
    this.actionService.deleteAction(action);
    this.listAction = this.actionService.getAllAction();
  }

}
