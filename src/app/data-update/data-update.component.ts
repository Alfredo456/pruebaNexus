import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-update',
  templateUrl: './data-update.component.html',
  styleUrls: ['./data-update.component.scss']
})
export class DataUpdateComponent implements OnInit {
  @Input() user: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
