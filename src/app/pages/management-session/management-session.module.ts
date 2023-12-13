import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementSessionPageRoutingModule } from './management-session-routing.module';

import { ManagementSessionPage } from './management-session.page';
import { CreationModalModule } from "./creation-modal/creation-modal.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationModalModule,
    ManagementSessionPageRoutingModule
  ],
  declarations: [ManagementSessionPage]
})
export class ManagementSessionPageModule {}
