import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-update-modal',
  templateUrl: './data-update-modal.component.html',
  styleUrls: ['./data-update-modal.component.scss']
})
export class DataUpdateModalComponent implements OnInit {

  @Input() user: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
