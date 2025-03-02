import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Menubar } from 'primeng/menubar';
import { PanelMenu } from 'primeng/panelmenu';
@Component({
  selector: 'app-cloud-sign',
  standalone: true,
  imports: [RouterLink, Menu, CommonModule, RouterOutlet],
  templateUrl: './cloud-sign.component.html',
  styleUrl: './cloud-sign.component.css'
})
export class CloudSignComponent implements OnInit {
  items: MenuItem[] = [];
  item = [
    {
      menuItem: 'Accueil',
      dispayItem: 'jlkfklsdf'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        route: 'accueil'
      },
      {
        label: 'Files',
        icon: 'pi pi-file',
        route: 'files'
      },
      {
        label: 'Cloud',
        icon: 'pi pi-cloud',
        route: 'cloud'
      },
      {
        label: 'Devices',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Phone',
            icon: 'pi pi-mobile',
            route: 'phone'
          },
          {
            label: 'Desktop',
            icon: 'pi pi-desktop',
            route: 'desktop'
          },
          {
            label: 'Tablet',
            icon: 'pi pi-tablet',
            route: 'tablet'
          }
        ]
      }
    ];
  }

}
