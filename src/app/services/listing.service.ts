import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private _http = inject(HttpClient);

  constructor() { }

  getListingBySearch(search: string) {
    return this._http.get<any[]>(
      `http://localhost:5500/search/listing?search=${search}`
    );
  }
}
