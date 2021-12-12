import { Component, Input, } from '@angular/core';

export interface IChannel {
  id: number,
  title: string,
  icon: string,
  link: string
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent {
  @Input() public cols: number = 8;
  @Input() public displayCols: number = 5;
  public slideMagin: string = '0';
  
  constructor() {}

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }
  
  public get templateColumns(): string {
    // 用到 css 里面的 repeat 函数
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`;
  }
  
  public handleScroll(event): void {
    this.slideMagin = `0 ${100 * event.target.scrollLeft / event.target.scrollWidth}%`;
  }
}
