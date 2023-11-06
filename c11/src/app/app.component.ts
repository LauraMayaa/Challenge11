import { Component, OnInit } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Cocktails } from './cocktails.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  };


}

