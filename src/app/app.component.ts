import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portifolio';
  isDarkmode = true;

  toggleIcon() {
    this.isDarkmode = !this.isDarkmode;
  }
}
