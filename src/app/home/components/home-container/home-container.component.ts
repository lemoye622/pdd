import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TopMenu } from '../../../shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router, private service: HomeService) { }

  // scrollableTabBgColor = 'red';
  TopMenus: TopMenu[] = [];

  // TopMenus2: TopMenu[] = [
  //   {
  //     title: 'hebe',
  //     link: ''
  //   },
  //   {
  //     title: 'leehom',
  //     link: ''
  //   },
  //   {
  //     title: 'Taylor Swift',
  //     link: ''
  //   },
  //   {
  //     title: 'vae',
  //     link: ''
  //   }
  // ];

  // imageSliders: ImageSlider[] = [
  //   {
  //     imgUrl:
  //       'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340',
  //       link: '',
  //       caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340',
  //       link: '',
  //       caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340',
  //       link: '',
  //       caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bca044fb5d36616dc040890dfb7887e3.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
  //       link: '',
  //       caption: ''
  //   },
  //   {
  //     imgUrl:
  //       'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
  //       link: '',
  //       caption: ''
  //   }
  // ];


  ngOnInit(): void {
    this.TopMenus = this.service.getTabs();
  }


  handleTabSelect(TopMenu: TopMenu) {
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
