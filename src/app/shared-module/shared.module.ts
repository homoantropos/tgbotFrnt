import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ButtonStylingDirective} from './directives/buttonStyling.directive';
import { SendVideoEditorComponent } from './components/messageEditors/send-video-editor/send-video-editor.component';
import { SendMessageComponent } from './components/messageEditors/send-message/send-message.component';
import { SendPhotoComponent } from './components/messageEditors/send-photo/send-photo.component';
import { SendPollComponent } from './components/messageEditors/send-poll/send-poll.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
  exports: [
    ButtonStylingDirective,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ButtonStylingDirective,
    SendVideoEditorComponent,
    SendMessageComponent,
    SendPhotoComponent,
    SendPollComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  providers: []
})
export class SharedModule {}
