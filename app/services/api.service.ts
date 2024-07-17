import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

  constructor(private http: HttpClient) { }
  fetchDefinition(word: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${word}`);
  }
  // async fetchDefinition(word: string): Promise<any> {
  //   try {
  //     const response = await fetch(`${this.apiUrl}${word}`);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok.');
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     throw error;
  //   }
  // }

}
