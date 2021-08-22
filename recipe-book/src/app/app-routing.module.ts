import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { MainPageComponent } from './../main/pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishDetailsComponent } from './dish-details/dish-details/dish-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [{
      path: '',
      redirectTo: 'przepisy',
      pathMatch: 'full'
    },
    {
      path:'przepisy',
      component: RecipesListComponent,
    },
    {
      path: 'szczegoly-przepisu/:id',
      component: DishDetailsComponent,
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
