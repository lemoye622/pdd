import { Component } from '@angular/core';
import { IChannel } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  channels: IChannel[] = [
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
