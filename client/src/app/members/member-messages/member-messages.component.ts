import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {MessageService} from "../../_services/message.service";
import {NgForm} from "@angular/forms";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent {
  @ViewChild('messageForm') messageForm?: NgForm
  @Input() username?: string
  messageContent = ''

  constructor(public messageService: MessageService) { }

  sendMessage() {
    if (!this.username) return;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm?.reset()
    })
  }
}
