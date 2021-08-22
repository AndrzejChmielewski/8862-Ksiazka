import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnInit {
  @Input() dish: any

  constructor(private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    console.log('dish', this.dish);
  }

  logoGetter(id: number | undefined): string {
    let res = ''
    switch (id) {
      case 1: res ='gulasz';
      break;
      case 2: res = 'pasta';
      break;
      case 3: res = 'roladki';
      break;
      case 4: res = 'zupa';
      break;
    }
    return res;
  }

  goToDetails(id: number): void {
    this.router.navigate([`/szczegoly-przepisu/${id}`])
  }

}
