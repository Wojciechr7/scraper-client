import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';


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

    constructor(public dialog: MatDialog) {

    }

    openDialog(data) {

        this.dialog.open(DataDialog, {
            data: data
        });
    }
}


@Component({
    selector: 'app-data-dialog',
    templateUrl: 'dialog.html',
    styleUrls: ['table-settings.component.scss']
})
export class DataDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Array<string>) {}
}
