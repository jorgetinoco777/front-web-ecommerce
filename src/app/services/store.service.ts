import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  name_function: string;
  url: string;
  headers = new HttpHeaders();

  constructor( private http: HttpClient ) {
    this.headers.set("Content-Type", "application/json");
    this.url = `${ environment.firebaseConfig.databaseURL }`;
  }

  save( data ) {
    this.name_function = `stores-register.json`;
    return this.http.post(`${ this.url }/${ this.name_function }`, { headers: this.headers, ...data });
  }

}
