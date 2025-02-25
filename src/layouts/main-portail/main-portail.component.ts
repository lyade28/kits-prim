import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterPortailComponent } from "../footer-portail/footer-portail.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-portail',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterPortailComponent,
    RouterModule
  ],
  templateUrl: './main-portail.component.html',
  styleUrl: './main-portail.component.css'
})
export class MainPortailComponent {

}
