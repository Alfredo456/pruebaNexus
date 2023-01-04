import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  title = 'pruebaNexus';
  @Input() user: any;

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
