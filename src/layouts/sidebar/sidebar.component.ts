import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
interface IMenu {
  menId: number;
  menPath: string;
  menTitle: string;
  menIconType: string;

  childrens?: {
    menId: number;
    menPath: string;
    menTitle: string;
  }[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuState: { [key: string]: boolean } = {};
  menuIconName = 'panel-right-close';
  constructor(private _router: Router) {
  }
  menuItems: IMenu[] = [
    {
      menId: 1,
      menTitle: 'Tableau de bord',
      menPath: '/dashboard',
      menIconType: 'dashboard',
      childrens: []
    },
    // {
    //   menId: 2,
    //   menTitle: 'Gestion des articles',
    //   menPath: '/Gestion-des-structures',
    //   menIconType: 'group',
    //   childrens: []
    // },
    {
      menId: 3,
      menTitle: 'Gestion des Publications',
      menPath: '/gestion-publication',
      menIconType: 'analytics',
      childrens: []
    },
    {
      menId: 4,
      menTitle: 'Achats et Abonnements',
      menPath: '/df',
      menIconType: 'list_alt',
      childrens: []
    },
    {
      menId: 5,
      menTitle: 'Gestion des Utilisateurs',
      menPath: '/utilisateurs',
      menIconType: 'manage_accounts',
      childrens: []
    },
    {
      menId: 6,
      menTitle: 'Gestion des abonnements',
      menPath: '/abonnements',
      menIconType: 'point_of_sale',
      childrens: []
    },

  ];
  ngOnInit(): void {
  }

  logOut() {
    this._router.navigateByUrl("/auth/login")
  }

  activeToggle(): void {
    const $wrapper = document.querySelector('#wrapper');
    const $sidebar = document.querySelector('#sidebar-wrapper');

    if ($wrapper && $sidebar) {
      $wrapper.classList.toggle('toggled');
      $sidebar.classList.toggle('active');

      // Change icon name based on sidebar state
      this.menuIconName = this.menuIconName === 'panel-right-close' ? 'panel-left-close' : 'panel-right-close';
    }
  }

  isSubMenuActive(menu: any): boolean {
    return menu.childrens.some((subMenu: any) =>
      this._router.isActive(subMenu.menPath, false)
    );
  }

  toggleSubMenu(menu: any) {
    if (!this.menuState.hasOwnProperty(menu.menPath)) {
      this.menuState[menu.menPath] = true;
    } else {
      this.menuState[menu.menPath] = !this.menuState[menu.menPath];
    }
  }

  closeMenuIfNotSubMenu(event: MouseEvent, menu: any) {
    if (!this.isSubMenuActive(menu)) {
      this.toggleSubMenu(menu);
    }
    event.stopPropagation(); // Empêche la propagation de l'événement
  }
}
