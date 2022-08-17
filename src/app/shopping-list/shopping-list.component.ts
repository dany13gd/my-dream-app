import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IngredientsService } from '../core/data-services/ingredients.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private url = environment.apiUrl;

  constructor(private ingredientsServices: IngredientsService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.ingredientsServices.getIngredients().subscribe(res => this.ingredients = res.data)
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.http.post(`${this.url}/ingredients`, ingredient)
  }

}
