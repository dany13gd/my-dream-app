import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getIngredients(): Observable<{data: Ingredient[]}> {
    return this.http.get<{data: Ingredient[]}>(`${this.url}/ingredients`);
  }

  addIngredients(): Observable<any> {
    return this.http.post(`${this.url}/ingredients`, JSON);
  }
}
