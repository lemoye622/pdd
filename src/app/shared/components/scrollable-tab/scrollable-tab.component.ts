import { Component, Input, OnInit, Output, EventEmitter, SimpleChange, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

export interface ITopMenu {
  id: number,
  title: string;
  link: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  public selectedIndex: number = -1;
  // tabs = ['热门', '男装', '手机'];
  // @Input 表示外部引入的装饰器(即menus这个属性是由外部set进来的)，对应数组的对象放到app.components.ts中
  @Input() public menus: ITopMenu[] = [];
  @Input() public backgroundColor: string = '#fff';
  @Input() public titleActiveColor: string = 'yellow';
  @Input() public titleColor: string = 'blue';
  @Input() public indicatorColor: string = 'gold';
  // EventEmitter 事件发射器
  @Output() public tabSelected: EventEmitter<ITopMenu> = new EventEmitter();

  // 构造函数永远首先被调用
  constructor() {
    console.log('组件构造调用');
  }

  // 在组件 @Input 属性发生变化的时候调用
  public ngOnChanges(changes: SimpleChanges): void {
    // changes 字典型参数
    console.log('组件输入属性改变', changes); 
  }

  // ngDoCheck(): void {
  //   console.log('组件脏值检测');
    
  // }

  // 组件内容初始化
  public ngAfterContentInit(): void {
    console.log('组件内容初始化');
  }

  // 组件初始化完成，在这个函数中，我们可以安全的使用组件的属性和方法
  public ngOnInit(): void {
    console.log('组件初始化');
  }

  // 组件内容脏值检测
  public ngAfterContentChecked(): void {
    // console.log('组件内容脏值检测');    
  }

  // 组件视图初始化(即组件与其子组件均初始化完成）
  public ngAfterViewInit(): void {
    console.log('组件视图初始化');
  }

  // 组件视图脏值检测
  public ngAfterViewChecked(): void {
    // console.log('组件视图脏值检测');   
  }

  // 组件销毁
  // 需要做一些清理工作
  public ngOnDestroy(): void {
    console.log('组件销毁'); 
  }

  public handleSelect(index: number): void {
    this.selectedIndex = index;
    // 当该组件的点击事件发生时，将自己定义的事件 tabSelected 发射出去（携带的事件是当前选中的元素）
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
