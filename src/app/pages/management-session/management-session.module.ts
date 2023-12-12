import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementSessionPageRoutingModule } from './management-session-routing.module';

import { ManagementSessionPage } from './management-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementSessionPageRoutingModule
  ],
  declarations: [ManagementSessionPage]
})
export class ManagementSessionPageModule {}
