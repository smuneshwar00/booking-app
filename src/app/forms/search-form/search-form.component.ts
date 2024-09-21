import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

  private _fb = inject(FormBuilder);
  private _router = inject(Router);

  searchForm = this._fb.group({
    search: ['', [Validators.required]],
  });

  search() {
    const searchText = this.searchForm.get('search')?.value;
    this._router.navigate(['listing', searchText]);
  }
}
