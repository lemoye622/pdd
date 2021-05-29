import { Component } from '@angular/core';
import { TopMenu } from './components';

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
  scrollableTabBgColor = 'red';
  TopMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ];

  TopMenus2: TopMenu[] = [
    {
      title: 'hebe',
      link: ''
    },
    {
      title: 'leehom',
      link: ''
    },
    {
      title: 'Taylor Swift',
      link: ''
    },
    {
      title: 'vae',
      link: ''
    }
  ];

  handleTabSelect(TopMenu: TopMenu) {
    const colors = ['red', 'blue', 'black'];
    const idx = Math.floor(Math.random() * 3);
    this.scrollableTabBgColor = colors[idx];
    console.log(TopMenu);
  }
}
