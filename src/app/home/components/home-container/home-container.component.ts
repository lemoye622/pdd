import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITopMenu } from '../../../shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router, 
    private service: HomeService
  ) { }

  // scrollableTabBgColor = 'red';
  public TopMenus: ITopMenu[] = [];

  public ngOnInit(): void {
    this.TopMenus = this.service.getTabs();
  }


  public handleTabSelect(TopMenu: ITopMenu): void {
    // const colors = ['red', 'blue', 'black'];
    // const idx = Math.floor(Math.random() * 3);
    // this.scrollableTabBgColor = colors[idx];
    console.log(TopMenu);

    this.router.navigate(['home', TopMenu.link])
  }

  // ngAfterViewInit(): void {
  //   console.log('组件', this.imgSlider);
  // }
}
