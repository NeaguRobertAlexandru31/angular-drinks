import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Drink } from "../models/drinks.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(" https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .subscribe((response: any) => {
        this.drinks = response;
        console.log(response);
      });
  }
}
