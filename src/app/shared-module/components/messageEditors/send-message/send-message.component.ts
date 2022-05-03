import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainPageRouterService} from '../../../services/mainPageRouter.service';
import {PostmanService} from '../../../services/postman.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messageForm: FormGroup;
  @ViewChild('text') textTextArea: ElementRef<HTMLTextAreaElement>;
  sending = false;

  constructor(
    private fb: FormBuilder,
    private mainRouter: MainPageRouterService,
    private postman: PostmanService
  ) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      chat_id: [481547986, [Validators.required]],
      text: ['', [Validators.required]],
      parse_mode: ['HTML'],
      disable_web_page_preview: [false],
      disable_notification: [false],
      protect_content: [false],
      reply_to_message_id: [''],
      allow_sending_without_reply: [true],
      reply_markup: ['{"inline_keyboard":[[{"text":"hey","url":"sportmon.org"}]]}']
    });
    setTimeout(
      () => {
        if (this.textTextArea) {
          this.textTextArea.nativeElement.focus();
        }
      }
    );
  }

  onSubmit(value: any): void {
    this.postman.sendMessage(value)
      .subscribe(
        response => {
          console.log(response);
          this.resetForm();
          this.goToMainPage();
        },
        error => console.error(error)
      );
  }

  resetForm(): void {
    this.messageForm.reset();
  }

  goToMainPage(): void {
    this.mainRouter.goToMainPage();
  }
}
