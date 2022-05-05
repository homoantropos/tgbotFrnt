import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostmanService} from '../../../services/postman.service';

@Component({
  selector: 'app-send-video-editor',
  templateUrl: './send-video-editor.component.html',
  styleUrls: ['./send-video-editor.component.css']
})

export class SendVideoEditorComponent implements OnInit {

  messageForm: FormGroup;

  media: File;
  mediaSrc = '';

  thumb: File;
  thumbSrc = '';
  addThumb = false;

  message = '';

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;

  @ViewChild('thumbInput') thumbInput: ElementRef<HTMLInputElement>;
  @ViewChild('image') image: ElementRef<HTMLImageElement>;

  loading = false;
  showBeforeVideo = false;
  loadingAllowed = false;
  submitted = false;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private postman: PostmanService
  ) {
  }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      chat_id: [481547986, [Validators.required]],
      caption: [''],
      parse_mode: ['HTML'],
      supports_streaming: [false],
      disable_notification: [false],
      protect_content: [false],
      reply_to_message_id: [null],
      allow_sending_without_reply: [false],
      reply_markup: ['{"inline_keyboard":[[{"text":"hey","url":"sportmon.org"}]]}']
    });
  }

  clickInputFile(event: any): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
      this.stopEvent(event);
    }
  }

  loadFile(event: any): void {
    if (this.mediaSizeIsAllowedToDownload(event.target.files[0])) {
      this.message = 'дозволено завантажувати файли менші 20мегабайт!';
      return;
    }

    this.loading = true;
    this.showBeforeVideo = true;
    this.resetEditor();
    this.media = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        this.mediaSrc = reader.result.toString();

        setTimeout(
          () => {
            this.video.nativeElement.play().then(
              () => {
                this.showBeforeVideo = false;
                const frameWidth = this.video.nativeElement.videoWidth;
                const frameHeight = this.video.nativeElement.videoHeight;
                if (frameWidth < frameHeight) {
                  this.video.nativeElement.height = window.innerHeight * 0.7;
                } else {
                  this.video.nativeElement.width = window.innerWidth * 0.6;
                }
                this.video.nativeElement.pause();
              }
            );
          }, 0
        );
        this.loading = false;
      }
    };
    reader.readAsDataURL(this.media);
  }

  clickInputThumb(event: any): void {
    if (this.thumbInput) {
      this.thumbInput.nativeElement.click();
      this.stopEvent(event);
    }
  }

  loadThumb(event: any): void {
    this.thumb = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        this.thumbSrc = reader.result.toString();
      }
    };

    reader.readAsDataURL(this.thumb);
  }

  onSubmit(value: any): void {
    if (this.messageForm.invalid) {
      return;
    }
    this.submitted = true;
    this.postman.sendVideo(value, this.media, this.thumb)
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

  closeEditor(): void {
    this.resetEditor();
    this.router.navigate(['main']);
  }

  resetEditor(event?: any): void {
    if (event) {
      this.stopEvent(event);
    }
    this.media = null;
    this.mediaSrc = '';
    this.loadingAllowed = false;
    this.resetThumb();
  }

  resetThumb(event?: any): void {
    if (event) {
      this.stopEvent(event);
    }
    this.thumb = null;
    this.thumbSrc = '';
    this.addThumb = false;
  }

  mediaSizeIsAllowedToDownload(media: File): boolean {
    return media.size >= 20971520;
  }

  stopEvent(event: any): void {
    event.stopPropagation();
    event.preventDefault();
  }

}
