import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../services/data.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Product} from '../../interfaces/product';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
    selector: 'app-products-table',
    templateUrl: './products-table.component.html',
    styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    selection = new SelectionModel<Product>(true, []);

    displayedColumns: Array<string>;

    constructor(public ds: DataService, private deviceService: DeviceDetectorService) {
        this.displayedColumns = this.deviceService.isMobile() ? ['select', 'name', 'price', 'shop'] : ['select', 'id', 'name', 'price', 'promotion', 'shop'];
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.ds.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            this.ds.checkedIndexes = [];
        } else {
            this.ds.dataSource.data.forEach(row => this.selection.select(row));
        }

    }

    public checkSelection(e, row) {
        this.selection.toggle(row);
    }

    public toCart() {
        localStorage.setItem('cart', JSON.stringify(this.selection.selected));
        this.selection.clear();

    }



    ngOnInit() {
        this.ds.getProducts().subscribe((data: Product[]) => {
                this.ds.dataSource = new MatTableDataSource(data);
                this.ds.dataSource.sort = this.sort;
                this.ds.dataSource.paginator = this.paginator;
                this.ds.setFilterPredicate();
            }, err => {
                throw new err;
            }
        );
    }


}
