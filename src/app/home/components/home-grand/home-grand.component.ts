import { Component, Injectable, Injector, OnInit } from '@angular/core';

/**
 * 产品类
 */
@Injectable()
class Product {
  // 在构造函数里这么写 private，相当于是将两个操作合在一起
  // 1.构造函数里需要这么一个参数 name
  // 2.这个类里面有个 private 的属性叫 name
  constructor(private name: string) {}
}

/**
 * 订单类
*/
class PurchaseOrder {
    // private product: Product;
    private amount: number;
    constructor(private product: Product) {
      // this.product = new Product('iphone 12');
    }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  date: Date;
  obj = { id: '001', name: '小米11', model: '曲面屏'};
  price = 8699;
  data = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
    this.date = this.minusDays(new Date(), 24);
    const injector = Injector.create({
      providers: [
        {
          // 标识符
          provide: Product,
          // useClass: Product
          // 工厂模式(按照自己的想法构造一个工厂)
          useFactory: () => {
            return new Product('小米11');
          },
          deps: []
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          // 依赖于 Product
          deps: [Product]
        },
        {
          provide: 'baseUrl',
          useValue: 'http://localhost'
        }
      ]
    });
    console.log('product', injector.get(Product));
    console.log('PurchaseOrder', injector.get(PurchaseOrder));
    console.log('url', injector.get('baseUrl'));

  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}