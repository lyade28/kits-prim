import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { menuStyles } from './head.style';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, CommonModule, AvatarModule, Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'

})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router) { }


  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.router.navigate(['/accueil']);
        }
      },
      {
        label: 'Documentation',
        items: [
          {
            label: 'Osign',
            icon: 'pi pi-palette',
            command: () => {
              this.router.navigate(['/cloud-sign']);
            }
          },
          {
            label: 'EmSign',
            icon: 'pi pi-link',
            command: () => {
              this.router.navigate(['/Em-sign']);
            }
          },

        ]
      },

      {
        label: 'Contact',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.router.navigate(['/Contact']);
        }
      },
    ];
  }

  menubarStyle = menuStyles;
}