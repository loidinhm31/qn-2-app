import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CardItemComponent } from "./card-item.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NgOptimizedImage],
  declarations: [CardItemComponent],
  exports: [CardItemComponent],
})
export class CardItemModule {}
