import { Component, OnInit } from '@angular/core';
import {UpdateService} from '../../services/update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private us: UpdateService) {}


    public updateHandler() {

    }


    ngOnInit() {
  }


}
