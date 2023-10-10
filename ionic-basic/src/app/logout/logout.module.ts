import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LogoutPage } from './logout.page';

import { HomePageRoutingModule } from './logout-routing.module';


@NgModule({
@@ -14,6 +14,6 @@ import { HomePageRoutingModule } from './home-routing.module';
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [LogoutPage]
})
export class HomePageModule {}