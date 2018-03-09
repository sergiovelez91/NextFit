import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExerciseService {
  BASE_URL: String = 'http://localhost:3000/exercise';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}`)
      .map((res) => res.json());
  }

  get(id) {
    console.log(id);
    return this.http.get(`${this.BASE_URL}/${id}`)
      .map((res) => res.json());
  }

  add(exercise) {
    return this.http.post(`${this.BASE_URL}/new`, exercise)
      .map((res) => res.json());
  }

  edit(id, exercise) {
    return this.http.put(`${this.BASE_URL}/edit/${id}`, exercise)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.get(`${this.BASE_URL}/delete/${id}`)
      .map((res) => res.json());
  }
}
