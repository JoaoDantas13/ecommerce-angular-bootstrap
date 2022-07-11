import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_URL = 'http://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProduto() {
    return this.http.get<any>(this.API_URL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
