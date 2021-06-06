import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '100px';
  @Input() intervalBySeconds = 2;
  // 在Augular8.0之后，@ViewChild要指定第二个参数
  // 表示该元素是在ngIf/ngFor包含之下，即动态，static就是false，否则为true（静态）
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);
    // 在angular中直接操作DOM是不提倡的（容易引起注入攻击）
    // this.imgSlider.nativeElement.innerHTML = `<span>Hello Angular</span>`
    // console.log('ngOnInit2', this.imgs); // undefined
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.imgs);
    // this.imgs.forEach((item) => {
    //   item.nativeElement.style.height = '100px';
    // })
    // 推荐用以下做法
    this.imgs.forEach((item) => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    })

    let i = 0;
    setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement, 
        'scrollLeft', 
        ((++i % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length);
    }, this.intervalBySeconds * 1000)
  }

  // handleScroll(event) {
  //   const ratio = event.target.scrollLeft * this.sliders.length /
  // }
}
