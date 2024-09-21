import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _http = inject(HttpClient);
  
  selectedSeats : BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor() {}
  getLayoutForBooking() {
    return this._http.get('http://localhost:5500/layout/bus?tripid=del-goa-32434424');
  }
  selectSeat(seat: any){
    this.selectedSeats.next([...this.selectedSeats.value, seat])
  }
}