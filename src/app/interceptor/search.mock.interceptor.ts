import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export function SearchMockInterceptor(
  req: HttpRequest<any>,
  next: any
): Observable<HttpEvent<unknown>> {
  console.log(req.url, req.method);
  if (req.url.includes('/search/listing') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: [
          {
            id: 1,
            city: 'delhi',
            timing: ['0300', '1200'],
          },
        ],
      })
    );
  } else if (req.url.includes('/layout/bus') && req.method === 'GET') {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          id: 1,
          city: 'delhi',
          rows: [
            [
              { id: 1, row: 1, name: 'A', class: 'economy', price: 1000 },
              { id: 2, row: 1, name: 'B', class: 'economy', price: 1000 },
              { id: 3, row: 1, name: 'C', class: 'economy', price: 1000 },
              { id: 4, row: 1, name: 'D', class: 'economy', price: 1000 },
            ],

            [
              { id: 1, row: 2, name: 'A', class: 'economy', price: 1000 },
              { id: 2, row: 2, name: 'B', class: 'economy', price: 1000 },
              { id: 3, row: 2, name: 'C', class: 'economy', price: 1000 },
              { id: 4, row: 2, name: 'D', class: 'economy', price: 1000 },
            ],
            [
              { id: 1, row: 3, name: 'A', class: 'economy', price: 1000 },
              { id: 2, row: 3, name: 'B', class: 'economy', price: 1000 },
              { id: 3, row: 3, name: 'C', class: 'economy', price: 1000 },
              { id: 4, row: 3, name: 'D', class: 'economy', price: 1000 },
            ],
            [
              { id: 1, row: 4, name: 'A', class: 'economy', price: 1000 },
              { id: 2, row: 4, name: 'B', class: 'economy', price: 1000 },
              { id: 3, row: 4, name: 'C', class: 'economy', price: 1000 },
              { id: 4, row: 4, name: 'D', class: 'economy', price: 1000 },
            ],
            [
              { id: 1, row: 5, name: 'A', class: 'economy', price: 1000 },
              { id: 2, row: 5, name: 'B', class: 'economy', price: 1000 },
              { id: 3, row: 5, name: 'C', class: 'economy', price: 1000 },
              { id: 4, row: 5, name: 'D', class: 'economy', price: 1000 },
            ],
          ],
        },
      })
    );
  } else {
    return next(req);
  }
}