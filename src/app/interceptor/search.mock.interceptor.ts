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
  } else {
    return next(req);
  }
}