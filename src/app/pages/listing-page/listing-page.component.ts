import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent {
  private _activatedRoute = inject(ActivatedRoute);
  searchText: string = '';

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.searchText = params?.['search'] || "";
    });
  }

}
