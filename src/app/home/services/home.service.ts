// 快捷键 ag-Service
import { Injectable } from '@angular/core';
import { ImageSlider, TopMenu } from 'src/app/shared/components';

@Injectable()
export class HomeService {

  constructor() { }

  TopMenus: TopMenu[] = [
    {
      id: 1,
      title: '热门',
      link: 'hot'
    },
    {
      id: 2,
      title: '男装',
      link: 'men'
    },
    {
      id: 3,
      title: '百货',
      link: 'department'
    },
    {
      id: 4,
      title: '运动',
      link: 'sports'
    },
    {
      id: 5,
      title: '手机',
      link: 'mobile'
    },
    {
      id: 6,
      title: '家纺',
      link: 'textile'
    },
    {
      id: 7,
      title: '食品',
      link: 'food'
    },
    {
      id: 8,
      title: '电器',
      link: ''
    },
    {
      id: 9,
      title: '鞋包',
      link: ''
    },
    {
      id: 10,
      title: '汽车',
      link: ''
    },
    {
      id: 11,
      title: '水果',
      link: ''
    },
    {
      id: 12,
      title: '电脑',
      link: ''
    },
    {
      id: 13,
      title: '内衣',
      link: ''
    },
    {
      id: 14,
      title: '家装',
      link: ''
    },
    {
      id: 15,
      title: '母婴',
      link: ''
    },
    {
      id: 16,
      title: '美妆',
      link: ''
    },
    {
      id: 17,
      title: '家具',
      link: ''
    }
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340',
        link: '',
        caption: ''
    },
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340',
        link: '',
        caption: ''
    },
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340',
        link: '',
        caption: ''
    },
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bca044fb5d36616dc040890dfb7887e3.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        link: '',
        caption: ''
    },
    {
      imgUrl:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1533&h=575&f=webp&q=90',
        link: '',
        caption: ''
    }
  ];

  // 暂时写成这样，未来要写成 http 这种
  getTabs() {
    return this.TopMenus;
  };

  // getChannels() {
  //   return this.channels;
  // };

  getBanners() {
    return this.imageSliders;
  }
}
