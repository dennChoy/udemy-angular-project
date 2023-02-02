import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test 1', 'Test 1 description', 'https://static01.nyt.com/images/2020/10/07/dining/04HealthyRoundup-Chicken-and-Cabbage/merlin_173165028_672c579b-817d-4be9-9c06-2c5d75334792-videoSixteenByNine3000.jpg'),
    new Recipe('Test 1', 'Test 1 description', 'https://static01.nyt.com/images/2020/10/07/dining/04HealthyRoundup-Chicken-and-Cabbage/merlin_173165028_672c579b-817d-4be9-9c06-2c5d75334792-videoSixteenByNine3000.jpg')
  ];

}
