import { Component,OnInit,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  reason = '';
  ngOnInit(): void {
  }
  
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
