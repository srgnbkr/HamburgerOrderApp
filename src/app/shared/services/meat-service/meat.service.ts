import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Meat} from "../../interfaces/meat";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class MeatService {

  constructor(private httpClient:HttpClient) { }

  getMeats():Observable<Meat[]>{
      return this.httpClient.get<Meat[]>(`${environment.base_url}/meats`);
  }
}

