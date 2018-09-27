import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../interfaces/product';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material';
import { map } from 'rxjs/operators';
import {Filter} from '../classes/filter';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    public url: string;
    public filter: Filter;
    public dataSource;
    public checkedIndexes: Array<number>;


  constructor(private http: HttpClient) {
      this.url = 'https://scrap-api.herokuapp.com';
      this.filter = new Filter();
      this.dataSource = new MatTableDataSource(['loading']);
      this.checkedIndexes = [];
  }

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url + '/products').pipe(map((data: Product[]) => {
            data.map((el: Product) => {
                el.price = Math.round((el.pln + el.gr / 100) * 100) / 100;
                return el;
            });
            return data;
        }));
    }

    public applyFilter(filterValue: string, id: number) {
        this.filter.apply(this.dataSource, filterValue, id);
        this.dataSource.filter = this.filter.FilterInputs;
    }

    public addFilter() {
        this.filter.addNew({
            id: this.filter.FilterInputs.length,
            data: ''
        });
    }

    public removeFilter() {
        this.filter.removeOne();
        this.dataSource.filter = this.filter.FilterInputs;
    }

    public setFilterPredicate(): void {
        this.dataSource.filterPredicate = (data, filters) => this.filter.setFilter(data, filters);
    }


}
