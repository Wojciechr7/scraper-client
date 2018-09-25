import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ProductsTableDataSource} from './products-table-datasource';
import {DataService} from '../../services/data.service';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
    selector: 'app-products-table',
    templateUrl: './products-table.component.html',
    styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: ProductsTableDataSource;
    displayedColumns: Array<string>;

    deviceInfo = null;


    constructor(public ds: DataService, private deviceService: DeviceDetectorService) {
        this.displayedColumns = this.deviceService.isMobile() ? ['name', 'price', 'market'] : ['id', 'name', 'price', 'promotion', 'market'];

    }




    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */


    public hideColumn() {
        this.displayedColumns.pop();
    }

    ngOnInit() {
        this.dataSource = new ProductsTableDataSource(this.paginator, this.sort);

    }
}
