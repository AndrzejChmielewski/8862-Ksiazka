import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
    declarations: [RecipesListComponent, RecipeInfoComponent],
    imports: [CommonModule, SharedModule, HttpClientModule, RatingModule],
    providers: [],

})
export class RecipesModule {}