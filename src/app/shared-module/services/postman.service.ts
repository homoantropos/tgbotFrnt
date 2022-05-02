import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostmanService {
  constructor(
    private http: HttpClient
  ) {
  }

  sendMessage(message: any, file?: File): Observable<any> {
    const fd = new FormData();
    Object.keys(message).map(
      key => {
        fd.set(key, message[key]);
      }
    );
    if (file) {
      fd.append('video', file, file.name);
    }
    return this.http.post(`https://api.telegram.org/bot${environment.bot_token}/sendMessage`, fd);
  }

  sendVideo(message: any, file: File): Observable<any> {
    const fd = new FormData();
    Object.keys(message).map(
      key => {
        fd.set(key, message[key]);
      }
    );
    fd.append('video', file, file.name);
    return this.http.post(`https://api.telegram.org/bot${environment.bot_token}/sendVideo`, fd);
  }

}
