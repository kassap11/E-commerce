
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  getAllProducts() {
    return this._http.get('https://fakestoreapi.com/products')
  }

}
