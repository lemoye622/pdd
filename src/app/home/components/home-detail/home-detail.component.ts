import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IImageSlider, ImageSliderComponent } from 'src/app/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  public username: string = '';
  public selectedTabLink: string = '';
  public imageSliders: IImageSlider[] = [];

  @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;

  constructor(
    private route: ActivatedRoute, 
    private service: HomeService
  ) { }

  public ngOnInit(): void {
    // 读取当前路由激活的参数
    this.route.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
      console.log('路径参数', params, this.selectedTabLink);
    })

    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    })

    this.imageSliders = this.service.getBanners();
    // this.channels = this.service.getChannels();
  }

  public ngAfterViewInit(): void {
    console.log('组件', this.imgSlider);
  }
}
