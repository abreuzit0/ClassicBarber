import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    CarouselComponent,
    FeatureBannerComponent,
    PriceListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    CarouselComponent,
    PriceListComponent,
    CardComponent,
    FeatureBannerComponent
  ]
})
export class SharedModule { }
