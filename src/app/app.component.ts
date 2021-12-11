import { Component, ViewChild } from '@angular/core';
import { Channel } from './shared/components';

// interface TopMenu {
//   title: string;
//   readonly link: string
// }

// 函数类型
// interface AddFunc {
//   (x: number, y: number) : number
// }

// 索引类型
// interface Dict {
//   [key: string]: string
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // selectedIndex = -1;
  // title = 'pdd';
  // // tabs = ['热门', '男装', '手机'];
  // menus: TopMenu[] = [
  //   {
  //     title: '热门',
  //     link: ''
  //   }
  // ];

  // dict: Dict = {
  //   a: '1',
  //   b: '2'
  // }

  // add: AddFunc = (x, y) => x + y;

  // constructor() {
  //   /*console.log(this.dict['a']);*/
  //   console.log(this.dict.a);
  // }

  // handleSelect(index: number) {
  //   // console.log(index);
  //   this.selectedIndex = index;
  // }

  channels: Channel[] = [
    {
      id: 1,
      title: '限时秒杀',
      icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340',
      link: 'hot'
    },
    {
      id: 1,
      title: '断码清仓',
      icon: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
      link: 'men'
    }
  ]
}
