import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'http://localhost:3000/produtos';

  constructor(private http : HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  add(produto : any) {
    return this.http.post(this.url, produto);
  }

  del(produto : any) {
    return this.http.delete(this.url + '/' + produto.id, produto);
  }
}