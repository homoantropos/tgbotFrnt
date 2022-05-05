import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostmanService} from '../../../services/postman.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-send-photo',
  templateUrl: './send-photo.component.html',
  styleUrls: ['./send-photo.component.css']
})

export class SendPhotoComponent implements OnInit {

  messageForm: FormGroup;
  photo: File;
  photoSrc: string;

  @ViewChild('photoInput') photoInput: ElementRef<HTMLImageElement>;
  @ViewChild('image') image: ElementRef<HTMLImageElement>;

  submitted = false;

  message = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postman: PostmanService,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      chat_id: [481547986, [Validators.required]],
      caption: [''],
      parse_mode: ['HTML'],
      disable_notification: [false],
      protect_content: [false],
      reply_to_message_id: [null],
      allow_sending_without_reply: [false],
      reply_markup: ['{"inline_keyboard":[[{"text":"hey","url":"sportmon.org"}]]}']
    });
  }

  clickPhotoInput(event: any): void {
    if (this.photoInput) {
      this.photoInput.nativeElement.click();
      this.stopEvent(event);
    }
  }

  loadPhoto(event: any): void {
    if (!event.target.files[0].type.includes('image')) {
      this.alert.danger(`ви не можете завантажувати файл типу ${event.target.files[0].type}`);
      return;
    }

    if (this.mediaSizeIsAllowedToDownload(event.target.files[0])) {
      this.alert.warning('розмір файлу не може пеервищувати 20Mb');
      return;
    }

    this.photo = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        this.photoSrc = reader.result.toString();
      }
    };

    if (this.photo) {
      reader.readAsDataURL(this.photo);
    }

  }

  onSubmit(value: any): void {
    if (this.messageForm.invalid) {
      return;
    }
    this.submitted = true;
    this.postman.sendPhoto(value, this.photo)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = false;
          this.closeEditor();
        },
        error => {
          console.error(error);
          this.submitted = false;
        }
      );
  }

  stopEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  closeEditor(): void {
    this.resetEditor();
    this.router.navigate(['main']);
  }

  resetEditor(event?: any): void {
    if (event) {
      this.stopEvent(event);
    }
    this.photo = null;
    this.photoSrc = '';
    this.resetThumb();
  }

  resetThumb(event?: any): void {
    if (event) {
      this.stopEvent(event);
    }
  }

  mediaSizeIsAllowedToDownload(media: File): boolean {
    if (media) {
      return media.size >= 20971520;
    } else {
      return false;
    }
  }
}

