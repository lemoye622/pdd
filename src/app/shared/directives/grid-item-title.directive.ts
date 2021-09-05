import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {
  // 继续这么写当然可以，但我们发现原来制定的输入型属性可以在我们包含该指令的组件 horizontal-grid.component 当中直接去设置它的值
  // 那么如果这样的话，我们能不能有个 idea，就是能不能在 @Input() 前面加上 @HostBinding('display.grid-area') 即两个注解
  // 这样的话，一次操作就可以将两件事搞定
  // @Input() appGridItemTitle = '0.5rem';
  @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem';
  @HostBinding('style.grid-area') area = 'title';
  // constructor(private el: ElementRef, private rd2: Renderer2) {
  //   // this.rd2.setStyle(this.el.nativeElement, 'grid-area', 'title');
  // }

  // ngOnInit(): void {
  //   // 声明自己占据模板中的 title 区块
  //   this.rd2.setStyle(this.el.nativeElement, 'grid-area', 'title');
  //   this.rd2.setStyle(this.el.nativeElement, 'font-size', this.appGridItemTitle);
  // }
}