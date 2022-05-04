import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostmanService} from '../../../services/postman.service';
import {Router} from '@angular/router';

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

  imageWidth: number;
  imageHeight: number;

  submitted = false;

  message = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postman: PostmanService
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
    this.imageWidth = 100;
    if (this.image) {
      this.photoSrc = '';
      this.image.nativeElement.setAttribute('width', '');
      this.image.nativeElement.setAttribute('height', '');
    }


  }

  loadPhoto(event: any): void {
    this.photo = event.target.files[0];
    setTimeout(() => {
    }, 0);
    if (this.mediaSizeIsAllowedToDownload(this.photo)) {
      this.message = 'дозволено завантажувати файли менші 20мегабайт!';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        this.photoSrc = reader.result.toString();
        setTimeout(
          () => {
            const l = this.image.nativeElement.width / this.image.nativeElement.height;
            if (l < 1) {
              this.image.nativeElement.height = window.innerHeight * 0.7;
              this.image.nativeElement.width = this.image.nativeElement.height * l;
            } else {
              this.image.nativeElement.width = window.innerWidth * 0.6;
              this.image.nativeElement.height = this.image.nativeElement.width / l;
            }
          }, 0
        );
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
    if (this.photo) {
      return media.size >= 20971520;
    } else {
      return false;
    }
  }
}

