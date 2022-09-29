import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private sourceDataCsvUrl: string = './assets/screener-results.csv';

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.sourceDataCsvUrl, { responseType: 'text' });
  }
}
