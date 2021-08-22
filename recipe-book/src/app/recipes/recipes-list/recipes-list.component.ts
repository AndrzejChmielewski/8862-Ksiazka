
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  responseData!: any;
  recipesList!: any[];

  constructor(private serive: AppServiceService) { }

  ngOnInit(): void {
    this.getRecpiseFromAPI();

  }

  getRecpiseFromAPI() {
    this.serive.getData().subscribe((response) => {
        this.responseData = response;
        this.recipesList = this.responseData?.data;
    })
  }

}
