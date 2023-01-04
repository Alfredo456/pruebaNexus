import {Component} from '@angular/core';
import {informatonPruebas} from "../assets/information";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = informatonPruebas;
}
