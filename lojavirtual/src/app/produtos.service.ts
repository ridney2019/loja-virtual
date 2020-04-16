import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

    lista(){
      return this.http.get('assets/produtos.json');
    }
}
