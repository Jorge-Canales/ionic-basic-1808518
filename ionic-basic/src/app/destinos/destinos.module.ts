import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinosPageRoutingModule } from './destinos-routing.module';

import { DestinosPage } from './destinos.page';
import { GooglemapsComponent } from '../componentes/googlemaps/googlemaps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DestinosPage, GooglemapsComponent]
})
export class DestinosPageModule {}