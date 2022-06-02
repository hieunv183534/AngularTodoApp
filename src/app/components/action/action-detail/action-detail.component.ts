import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {
  constructor(private actionService: ActionService, private route: ActivatedRoute, private router: Router) { }

  actionName: string = '';

  ngOnInit(): void {
  }

  addAction(): void {
    this.actionService.addAction(this.actionName);
    this.router.navigate(['../actionlist'], { relativeTo: this.route });
  }

}
