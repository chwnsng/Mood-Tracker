import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataProviderService } from '../data-provider.service';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Tab4Page],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DataProviderService],
})
export class Tab4PageModule {}
