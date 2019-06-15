import { Component } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
type: string = null;
message: string = null;

  constructor(private notifier: NotificationService) {
    notifier.sub.subscribe(
      data => {
        this.type = data.type,
        this.message = data.message;
        this.reset();
      }
    );
  }

  /**
   * This method is for the error message to disappear after 6seconds
   */
  reset() {
    setTimeout(() => {
      this.type = null,
      this.message = null;
    }, 6000);

  }

}
