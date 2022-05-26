import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540'),
    new Recipe('A Test Recipe', 'This is a simple test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxfLVMCkDKaGIpBm2C2HVLtg5LNVAsR4h9g&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
