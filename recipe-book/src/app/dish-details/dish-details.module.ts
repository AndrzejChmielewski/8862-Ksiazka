import { DishDetailsComponent } from './dish-details/dish-details.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RatingModule } from "ng-starrating";
import { SharedModule } from "src/shared/shared.module";

@NgModule({
    declarations: [DishDetailsComponent],
    imports: [CommonModule, SharedModule, HttpClientModule, RatingModule],
    providers: [],

})
export class DishDetailsModule {}