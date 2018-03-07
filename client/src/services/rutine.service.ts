import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RutineService {
  BASE_URL: String = 'http://localhost:3000/rutine';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/${id}`)
      .map((res) => res.json());
  }

  add(rutine) {
    return this.http.post(`${this.BASE_URL}/new`, rutine)
      .map((res) => res.json());
  }

  edit(id, rutine) {
    return this.http.put(`${this.BASE_URL}/edit/${id}`, rutine)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.get(`${this.BASE_URL}/delete/${id}`)
      .map((res) => res.json());
  }
}
