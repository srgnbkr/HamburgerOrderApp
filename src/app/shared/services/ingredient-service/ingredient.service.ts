import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../interfaces/ingredient";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private httpClient:HttpClient) { }

  getIngredients():Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(`${environment.base_url}/ingredients`);
  }
}
