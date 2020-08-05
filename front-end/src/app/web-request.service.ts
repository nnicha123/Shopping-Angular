import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, item: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, item);
  }
  put(uri: string, item: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, item);
  }
  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
