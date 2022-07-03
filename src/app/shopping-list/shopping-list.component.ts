import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: any = [];
  list: any = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    var link = "http://localhost:1337/api/ingredients?sort=amount";

    this.http.get(link).subscribe(res => {
      this.list = res;
      this.ingredients = this.list.data;
      console.log(this.ingredients);

    })
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
