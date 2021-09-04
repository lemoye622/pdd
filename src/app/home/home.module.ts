import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';
import { ProductModule } from '../product/product.module';
import { HomeService } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent
  ],
  // providers: [
  //   {
  //     provide: Product,
  //     useFactory: () => {
  //       return new Product('小米11');
  //     },
  //     deps: []
  //   }
  // ],
  // providers: [PurchaseOrder],
  providers: [HomeService],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
