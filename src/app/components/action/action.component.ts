import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  toAddNewAction(): void {
    this.router.navigate(['actiondetail'], { relativeTo: this.route });
  }

  receiveActionToEdit($event:Event) {
    console.log($event);
  }

}
