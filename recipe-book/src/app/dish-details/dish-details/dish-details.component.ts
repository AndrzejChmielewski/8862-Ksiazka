import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceService } from 'src/app/recipes/app-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  displayedColumnsIngredients: string[] = ['ilosc', 'nazwa'];
  displayedColumnsHowToMake: string[] = ['krok', 'opis'];

  slectedDishId$!: Observable<number>;
  responseData!: any;
  recipesList!: any[];
  dishById!: any;

  constructor(private serive: AppServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.slectedDishId$ = this.getSelectedDishId();
    this.slectedDishId$.subscribe(id => {
      this.getRecpiseFromAPIById(id);
    });
  }

  
  getRecpiseFromAPIById(id: number) {
    this.serive.getData().subscribe((response) => {
        this.responseData = response;
        this.recipesList = this.responseData?.data;
        this.dishById = this.recipesList.find(element => element.id === id);
    })
  }

  private getSelectedDishId(): Observable<number> {
    return this.route.params.pipe(map(params => params && +params.id));
  }

  goBack(): void {
    this.router.navigate([`/przepisy`])
  }
}
