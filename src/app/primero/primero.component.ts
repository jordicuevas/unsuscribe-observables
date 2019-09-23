import { Component , OnDestroy, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';
@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit , OnDestroy{

  constructor() { }

  ngOnDestroy() {

  }
  ngOnInit() {
    interval(1000)
      .pipe( untilComponentDestroyed(this))
      .subscribe(() => {
        console.log('observable')
      });
  }

}
