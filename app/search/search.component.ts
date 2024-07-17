import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = ''
  @Output() searchResult = new EventEmitter<any>();

  constructor(private apiService: ApiService){
  }
  async searchWord() {
    try {
      const data = await this.apiService.fetchDefinition(this.searchTerm);
      this.searchResult.emit(data); // Emit data to parent component
    } catch (error) {
      console.error('Error fetching definition:', error);
      // Handle error
    }
  }
}
