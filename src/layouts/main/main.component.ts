import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SidebarComponent
  ]

})
export class MainComponent {

  menuState: { [key: string]: boolean } = {};
  menuIconName = 'panel-right-close';
  constructor(private _router: Router) {
  }

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
