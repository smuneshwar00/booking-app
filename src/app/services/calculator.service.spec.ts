import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CalculatorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add to numbers', () => {
    expect(service.add(3, 4)).toEqual(7);
  });

  it('should return area of circle', () => {
    service.pi = 3.14;
    expect(service.areaOfCirle(5)).toEqual(78.5);
  });

  it('should get people data', () => {
    const dummyData = [{ name: 'abc' }];
    service.getData().subscribe((data) => {
        expect(data.length).toEqual(1)
        expect(data[0].name).toEqual("abc")
    });
    const request = httpMock.expectOne('http://localhost:5000/people');
    expect(request.request.method).toBe("GET")
    request.flush(dummyData);
  });
});