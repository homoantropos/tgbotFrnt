import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class MainPageRouterService {
  constructor(
    private router: Router
  ) {  }

  goToMainPage(): void {
    this.router.navigate(['main']);
  }
}
