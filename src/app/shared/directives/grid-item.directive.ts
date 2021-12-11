import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  // 这样写的话，是没办法当成宿主元素的一个属性的
  // selector: 'appGridItemDirective',
  // 我们想将其当成 horizontal-grid.component.html 中的 div 的属性（在那个html中应用该指令,属性型指令）
  // 此时要加上 []
  // 它位于哪个节点当中，哪个就是它的宿主
  selector: '[appGridItem]',
})
export class GridItemDirective {
  // 装饰器里接收一个参数 style.display
  // 也就是将 style 里的 display 绑定到变量 display 
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';


  // 得到指令宿主，然后去操作这些宿主的样式
  // 要写文档的话，推荐使用 rd2
  // constructor(private el: ElementRef, private rd2: Renderer2) {
  //   // this.rd2.setStyle(this.el.nativeElement, 'display', 'grid');
  //   // this.rd2.setStyle(this.el.nativeElement, 'grid-template-areas', `'image' 'title'`);
  //   // this.rd2.setStyle(this.el.nativeElement, 'place-items', 'center');
  //   // this.rd2.setStyle(this.el.nativeElement, 'width', '4rem');
  // }

  // ngOnInit(): void {
  //   this.rd2.setStyle(this.el.nativeElement, 'display', 'grid');
  //   // 给出网格的模板，默认情况下是一个堆叠的布局，给出一个网格的两个构成部分的命令
  //   this.rd2.setStyle(this.el.nativeElement, 'grid-template-areas', `'image' 'title'`);
  //   this.rd2.setStyle(this.el.nativeElement, 'place-items', 'center');
  //   this.rd2.setStyle(this.el.nativeElement, 'width', '4rem');
  // }
}

