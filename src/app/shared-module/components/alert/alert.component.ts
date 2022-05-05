import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  @Input() delay = 3000;
  type = '';
  text = '';

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
   this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;
      console.log('working');
      const timeOut = setTimeout(() => {
        clearTimeout(timeOut);
        this.text = '';
        this.type = '';
      }, this.delay);
    });
  }
}
