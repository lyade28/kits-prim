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

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Documents',
            icon: 'pi pi-file',

          },
          {
            label: 'Images',
            icon: 'pi pi-image',

          }
        ]
      },
      {
        label: 'Cloud',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Upload',
            icon: 'pi pi-cloud-upload'
          },
          {
            label: 'Download',
            icon: 'pi pi-cloud-download'
          },
          {
            label: 'Sync',
            icon: 'pi pi-refresh'
          }
        ]
      },
      {
        label: 'Devices',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Phone',
            icon: 'pi pi-mobile',
            command: () => {
              this.router.navigate(['/cloud-sign/Phone']);
            }
          },
          {
            label: 'Desktop',
            icon: 'pi pi-desktop'
          },
          {
            label: 'Tablet',
            icon: 'pi pi-tablet'
          }
        ]
      }
    ];
  }


}
