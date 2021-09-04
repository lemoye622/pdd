import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { log } from 'console';
import { Confirmable, Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  // username = '';

  private _username = '';

  @Output() usernameChange = new EventEmitter();
  // 写一个表情注解
  @Emoji() result = 'I love hebe';

  constructor(private elementRef: ElementRef) { }

  // @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;

  ngOnInit() {
    const id:number = 6;
    console.log('element', this.elementRef.nativeElement.querySelector('#table'))
    const table = this.elementRef.nativeElement.querySelector('#table')
    const tdList = this.elementRef.nativeElement.querySelectorAll('#table tbody tr td');
    // const tdList = this.elementRef.nativeElement.querySelector('table')
    console.log('arr', tdList);

    [...tdList].forEach(td => {
      if (td.innerHTML == id) {
        const { y } = td.getBoundingClientRect();
        console.log('y', y);

        table.scrollTop = y;
      }
    })
  }

  // 属性的读和写
  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
    this.usernameChange.emit(value);
  }

  // 写一个确认对话框的注解
  @Confirmable('您确认要执行吗?')
  handleClick() {
    console.log('点击已执行');
  }
}
