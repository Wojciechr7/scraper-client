import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../services/data.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import {Product} from '../../interfaces/product';


@Component({
    selector: 'app-products-table',
    templateUrl: './products-table.component.html',
    styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: Array<string>;

    constructor(public ds: DataService, private deviceService: DeviceDetectorService) {
        this.displayedColumns = this.deviceService.isMobile() ? ['name', 'pln', 'gr', 'shop'] : ['id', 'name', 'pln', 'gr', 'promotion', 'shop'];
    }

    public hideColumn() {
        this.displayedColumns.pop();
    }



    ngOnInit() {
        this.ds.getProducts().subscribe((data: Product[]) => {
                this.ds.dataSource = new MatTableDataSource(data);
                this.ds.dataSource.sort = this.sort;
                this.ds.dataSource.paginator = this.paginator;
            }, err => {
                throw new err;
            }
        );
    }



}
