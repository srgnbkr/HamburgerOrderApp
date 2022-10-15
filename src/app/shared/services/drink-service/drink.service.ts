import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../../interfaces/drink';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  constructor(private httpClient: HttpClient) {}

  getDrinks(): Observable<Drink[]> {
    return this.httpClient.get<Drink[]>(`${environment.base_url}/drinks`);
  }
}
