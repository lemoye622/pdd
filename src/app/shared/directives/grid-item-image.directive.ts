import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  // 若要控制图片宽度，我们需要指令里有个输入性属性
  // 这里我们取上述 selector 中的 appGridItemImage
  @Input() appGridItemImage = '200px';
  // 我们可以有其他的多个属性
  @Input() fitMode = 'none';
  constructor(private el: ElementRef, private rd2: Renderer2) {
    // this.rd2.setStyle(this.el.nativeElement, 'grid-area', 'image');
    // this.rd2.setStyle(this.el.nativeElement, 'width', this.appGridItemImage);
    // this.rd2.setStyle(this.el.nativeElement, 'height', '100px');
    // this.rd2.setStyle(this.el.nativeElement, 'margin-top', '40px');
    // this.rd2.setStyle(this.el.nativeElement, 'object-fit', this.fitMode);
  }

  ngOnInit(): void {
    // 声明自己占据模板中的 image 区块
    this.rd2.setStyle(this.el.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.el.nativeElement, 'width', this.appGridItemImage);
    this.rd2.setStyle(this.el.nativeElement, 'height', '100px');
    this.rd2.setStyle(this.el.nativeElement, 'margin-top', '40px');
    this.rd2.setStyle(this.el.nativeElement, 'object-fit', this.fitMode);
  }

  // 该注解第一个参数是事件名称，第二个参数是该事件携带的一些数据
  @HostListener('click', ['$event.target'])
  handleClick(ev: unknown): void {
    console.log(ev); 
  }
}