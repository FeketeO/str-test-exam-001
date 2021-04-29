import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint: string = `https://nettuts.hu/jms/FeketeO/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endPoint);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.endPoint}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.endPoint}`, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.endPoint}/${product.id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.endPoint}/${id}`);
  }

}
