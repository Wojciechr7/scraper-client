import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface Column {
  name: string;
  active: boolean;
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
    selector: 'app-table-settings',
    templateUrl: 'table-settings.component.html',
    styleUrls: ['table-settings.component.scss'],
})
export class TableSettingsComponent {

  @Input() displayedColumns: Array<string>;

  private allData: Array<Column>;

    constructor(public dialog: MatDialog) {

    }

    openDialog(data) {
        this.reloadData();

        this.dialog.open(DataDialog, {
            data: [this.checkBoxes(data), data]
        });
    }

    private reloadData() {
        this.allData = ['select', 'id', 'name', 'price', 'promotion', 'shop'].map(el => {
            return {
                name: el,
                active: false
            };
        });
    }

    private checkBoxes(data) {
        for (const i of this.allData) {
            for (const j of data) {
                if (i.name === j) {
                    i.active = true;
                }
            }
        }
        return this.allData;
    }





}


@Component({
    selector: 'app-data-dialog',
    templateUrl: 'dialog.html',
    styleUrls: ['table-settings.component.scss']
})
export class DataDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data) {}

    public toggleColumn(item) {
        item.active = !item.active;
        let isFound = false;

        for (const el in this.data[1]) {
          if (item.name === this.data[1][el]) {
              this.data[1].splice(el, 1);
              isFound = true;
              break;
          }
        }
        if (!isFound) {
            this.data[1].push(item.name);
        }

    }
}
