import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';
import { NavigationService, NotificationService, NotificationType } from './common-services';
import { RouterOutlet } from '@angular/router';
import { AjaxWaitComponent } from './main/ajax-wait';
import { NotificationModalComponent } from './main/notification-modal/notification-modal.component';
import { HeaderComponent } from './main/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, NotificationModalComponent, AjaxWaitComponent, RouterOutlet]
})
export class AppComponent /* implements OnInit */ {

  // constructor(log: LoggerService) {
  //   log.error('Es un error');
  //   log.warn('Es un warn');
  //   log.info('Es un info');
  //   log.log('Es un log');
  // }

  // constructor(private notify: NotificationService) {}
  // ngOnInit(): void {
  //   this.notify.add('Aplicación arrancada', NotificationType.info);
  // }

  constructor(private navigation: NavigationService) {}
}
