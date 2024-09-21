import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent {
  private _activatedRoute = inject(ActivatedRoute);
  private _listing = inject(ListingService);
  searchText: string = '';

  listing : any[] = [];

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.searchText = params?.['search'] || "";
      this._listing.getListingBySearch(this.searchText).subscribe((response)=>{
        console.log(response);
        this.listing = response;
      })
    });
  }

}
