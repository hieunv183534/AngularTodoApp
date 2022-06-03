import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.scss'],
  providers: [MessageService]
})
export class ActionDetailComponent implements OnInit {
  constructor(private actionService: ActionService,
    private route: ActivatedRoute, private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { }

  actionName: string = '';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  addAction(): void {
    if (this.actionName.trim()) {
      this.actionService.addAction(this.actionName);
      this.router.navigate(['../actionlist'], { relativeTo: this.route });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Tên hành động không được trống!' });
      setTimeout(() => {
        this.messageService.clear();
      }, 3000);
    }
  }
}
