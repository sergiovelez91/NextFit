import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrainingService {
  BASE_URL: String = 'http://localhost:3000/training';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/${id}`)
      .map((res) => res.json());
  }

  add(training) {
    return this.http.post(`${this.BASE_URL}/new`, training)
    .map((res) => res.json());
  }

  edit(id, training) {
    return this.http.put(`${this.BASE_URL}/edit/${id}`, training)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.get(`${this.BASE_URL}/delete/${id}`)
      .map((res) => res.json());
  }
}
