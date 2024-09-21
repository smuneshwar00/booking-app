import { Component } from '@angular/core';
import { SearchFormComponent } from '../../forms/search-form/search-form.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SearchFormComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

}
