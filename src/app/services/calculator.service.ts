import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  
  _http = inject(HttpClient);

  pi = Math.PI;

  constructor() {}
  
  add(a: number, b: number) {
    return a + b;
  }

  areaOfCirle(r: number) {
    return this.pi * Math.pow(r, 2);
  }

  getData() {
    this._http.get('http://localhost:5000/people').subscribe(() => {});
  }
}