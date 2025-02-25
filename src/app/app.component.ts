import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ConfirmationService, MegaMenuItem, MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { PanelMenu } from 'primeng/panelmenu';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SpeedDial } from 'primeng/speeddial';
import { Menu } from 'primeng/menu';
import { Menubar } from 'primeng/menubar';
import { Avatar } from 'primeng/avatar';

import { BadgeModule } from 'primeng/badge';

import { AvatarModule } from 'primeng/avatar';

interface City {
  name: string,
  code: string
}

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ConfirmationService, MessageService],
  imports: [RouterOutlet, ButtonModule, PanelMenu, ReactiveFormsModule, InputTextModule, RouterLink,
    FormsModule, FloatLabelModule, FluidModule, FormsModule,
    MultiSelectModule, CommonModule, TabsModule, TableModule,
    ConfirmPopupModule, ToastModule, ButtonModule, SpeedDial, FormsModule, Menu, AvatarModule, Menubar, BadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kits-prim';
  items: MenuItem[] | undefined;
  date2: Date | undefined;
  cities!: City[];
  items2: MenuItem[] = [];
  products: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1005',
      code: 'av2231fwg',
      name: 'Brown Purse',
      description: 'Product Description',
      image: 'brown-purse.jpg',
      price: 120,
      category: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1006',
      code: 'bib36pfvm',
      name: 'Chakra Bracelet',
      description: 'Product Description',
      image: 'chakra-bracelet.jpg',
      price: 32,
      category: 'Accessories',
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },

  ];

  items3: MenuItem[] | undefined;

  itemsmenu: MegaMenuItem[] | undefined;
  selectedCities!: City[];
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private router: Router) { }



  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Please confirm to proceed moving forward.',
      icon: 'pi pi-exclamation-circle',
      rejectButtonProps: {
        icon: 'pi pi-times',
        label: 'Annuler',
        outlined: true,
      },
      acceptButtonProps: {
        icon: 'pi pi-check',
        label: 'Confirmer',
      },
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }
  ngOnInit() {

    this.itemsmenu = [
      {
        label: 'Company',
        root: true,
        items: [
          [
            {
              items: [
                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
            }
          ]
        ]
      },
      {
        label: 'Resources',
        root: true
      },
      {
        label: 'Contact',
        root: true
      }
    ];


    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.items = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Documents',
            icon: 'pi pi-file',
            items: [
              {
                label: 'Invoices',
                icon: 'pi pi-file-pdf',
                items: [
                  {
                    label: 'Pending',
                    icon: 'pi pi-stop'
                  },
                  {
                    label: 'Paid',
                    icon: 'pi pi-check-circle'
                  }
                ]
              },
              {
                label: 'Clients',
                icon: 'pi pi-users'
              }
            ]
          },
          {
            label: 'Images',
            icon: 'pi pi-image',
            items: [
              {
                label: 'Logos',
                icon: 'pi pi-image'
              }
            ]
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
            icon: 'pi pi-mobile'
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
    this.items2 = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];

    this.items3 = [
      {
        label: 'Navigate',
        items: [
          {
            label: 'Router Link',
            icon: 'pi pi-palette',
            route: '/guides/csslayer'
          },
          {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
              this.router.navigate(['/installation']);
            }
          },
          {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://angular.io//'
          }
        ]
      }
    ];

  }
}
