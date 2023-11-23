import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { InputModalComponent } from "./input-modal.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [InputModalComponent],
})
export class InputModalModule {}
