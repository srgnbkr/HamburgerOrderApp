import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FriedFood} from "../../interfaces/friedFood";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FriedFoodService {

  constructor(private httpClient:HttpClient) { }

  getFriedFoods():Observable<FriedFood[]>{
    return this.httpClient.get<FriedFood[]>(`${environment.base_url}/friedFoods`);
  }
}
