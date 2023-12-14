import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CreationModalComponent } from "./creation-modal.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CreationModalComponent],
  exports: [],
})
export class CreationModalModule {}
