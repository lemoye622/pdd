import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface IImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() public sliders: IImageSlider[] = [];
  @Input() public sliderHeight: string = '100px';
  @Input() public intervalBySeconds: number = 2;
  public selectedIndex: number = 0;
  public intervalId: any;
  // 在Augular8.0之后，@ViewChild要指定第二个参数
  // 表示该元素是在ngIf/ngFor包含之下，即动态，static就是false，否则为true（静态）
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) { }

  public ngOnInit(): void {
    console.log('ngOnInit', this.imgSlider);
    // 在angular中直接操作DOM是不提倡的（容易引起注入攻击）
    // this.imgSlider.nativeElement.innerHTML = `<span>Hello Angular</span>`
    // console.log('ngOnInit2', this.imgs); // undefined
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.imgs);
    // this.imgs.forEach((item) => {
    //   item.nativeElement.style.height = '100px';
    // })
    // 推荐用以下做法
    this.imgs.forEach((item) => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    })

    //  let i = 0;
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement, 
        'scrollLeft', 
        (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length);
    }, this.intervalBySeconds * 1000)
  }

  public ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  // 处理数组越界
  public getIndex(idx: number): number {
    return idx >= 0
    ? idx % this.sliders.length
    : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  public handleScroll(event): void {
    // 滑动比例：往左滑动的 scrollLeft 乘以图片数组长度，再去除以整个的 scrollWidth
    // 这个比例意即：现在滑动的到没到应该找的下一张，其实就是看每张图的宽度
    // 如果超过了这一张图的宽度的一半了，那就进入下一张图片
    const ratio = 
    (event.target.scrollLeft * this.sliders.length) / event.target.scrollWidth;
    // event.target.scrollLeft / (event.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }
}