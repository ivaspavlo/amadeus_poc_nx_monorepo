import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '@amadeus/feature-search';

@Component({
  selector: 'amadeus-search-page',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  public showSearchResults = false;

  public onSearch(data: any): void {
    this.showSearchResults = true;
  }
}
