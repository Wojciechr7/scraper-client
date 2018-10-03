import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../interfaces/product';
import {map} from 'rxjs/operators';
import {AppSettings} from '../app.const';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

    public url: string;

  constructor(private http: HttpClient) {
      this.url = AppSettings.url;
  }

  public updateDatabase(): Observable<any> {
      return this.http.post(this.url + '/products', '');
  }

}
