import {Component, Inject, OnInit} from '@angular/core';
import {UpdateService} from '../../services/update.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {Time} from '../../interfaces/time';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public updating: boolean;

    constructor(private us: UpdateService, public dialog: MatDialog) {
        this.updating = false;
    }


    public updateHandler() {
        this.updating = true;
        this.us.updateDatabase().subscribe((data) => {
            if (!data) {
                this.updating = false;
                this.openDialog(0);
            } else {
                this.openDialog(data);
            }
        });
    }

    public openDialog(data) {

        this.dialog.open(LoadingDialog, {
            data: data
        });
    }


    ngOnInit() {
    }


}

@Component({
    selector: 'app-loading-dialog',
    templateUrl: 'dialog.html',
    styleUrls: ['home.component.scss']
})
export class LoadingDialog {


    public timeLeft: Time;

    constructor(@Inject(MAT_DIALOG_DATA) public data) {
        this.timeLeft = {
            minutes: Math.floor(data),
            seconds: parseInt(((data - Math.floor(data)) * 60).toFixed(2))
        };
    }


}
