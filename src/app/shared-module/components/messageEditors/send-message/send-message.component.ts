import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainPageRouterService} from '../../../services/mainPageRouter.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messageForm: FormGroup;

  sending = false;

  constructor(
    private fb: FormBuilder,
    private mainRouter: MainPageRouterService
  ) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      chat_id: ['', [Validators.required]],
      text: ['', [Validators.required]],
      parse_mode: ['HTML'],
      entities: this.fb.array([]),
      disable_web_page_preview: [false],
      disable_notification: [false],
      protect_content: [false],
      reply_to_message_id: [],
      allow_sending_without_reply: [true],
      reply_markup: []
    });
    if (this.entities) {
      this.addEntities();
    }
  }

  onSubmit(value: any): void {

  }

  get entities(): FormArray {
    return this.messageForm.controls.entities as FormArray;
  }

  addEntities(): void {
    this.entities.push(
      this.fb.group({
        type: [''],
        offset: [null],
        length: [null],
        url: [''],
        user: [''],
        language: ['']
      })
    );
  }

  removeEntity(index: number): void {
    this.entities.removeAt(index);
  }

  goToMainPage(): void {
    this.mainRouter.goToMainPage();
  }
}
