import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService, NotificationType } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola mundo';

  // constructor(log: LoggerService) {
  //   log.error('Es un error');
  //   log.warn('Es un warn');
  //   log.info('Es un info');
  //   log.log('Es un log');
  // }

  constructor(private notify: NotificationService) {}
  ngOnInit(): void {
    this.notify.add('Aplicación arrancada', NotificationType.info);
  }
}
