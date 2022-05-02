import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MainPageRouterService} from '../../services/mainPageRouter.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private  mainRouter: MainPageRouterService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToMainPage(): void {
    this.mainRouter.goToMainPage();
  }
}
