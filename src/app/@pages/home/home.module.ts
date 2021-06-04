import { DisclosureService } from './../../@core/services/disclosure.service';
import { HomeRoutingModule } from './home-routing.module';
import { DisclosuresComponent } from './disclosures/disclosures.component';
import { AboutComponent } from './about/about.component';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { FeaturesComponent } from './features/features.component';
import { BannerHeroComponent } from './banner-hero/banner-hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, BannerHeroComponent, FeaturesComponent, AboutComponent, FunFactComponent, DisclosuresComponent],
  providers: [DisclosureService]
})
export class HomeModule { }
