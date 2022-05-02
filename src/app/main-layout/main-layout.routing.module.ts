import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {SendVideoEditorComponent} from '../shared-module/components/messageEditors/send-video-editor/send-video-editor.component';
import {SendMessageComponent} from '../shared-module/components/messageEditors/send-message/send-message.component';
import {SendPhotoComponent} from '../shared-module/components/messageEditors/send-photo/send-photo.component';
import {SendPollComponent} from '../shared-module/components/messageEditors/send-poll/send-poll.component';
import {PageNotFoundComponent} from '../shared-module/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main', component: MainPageComponent, children: [
      {path: 'sendMessage', component: SendMessageComponent},
      {path: 'sendPhoto', component: SendPhotoComponent},
      {path: 'sendVideo', component: SendVideoEditorComponent},
      {path: 'sendPoll', component: SendPollComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})

export class MainLayoutRoutingModule {
}
