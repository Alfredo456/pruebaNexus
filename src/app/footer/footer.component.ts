import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title = 'pruebaNexus';
  @Input() user: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
