import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  pi = Math.PI;
  constructor() {}
  add(a: number, b: number) {
    return a + b;
  }
  areaOfCirle(r:number) {
    return this.pi * Math.pow(r, 2);
  }
}