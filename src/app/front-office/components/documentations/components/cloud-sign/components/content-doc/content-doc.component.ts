import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-content-doc',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './content-doc.component.html',
  styleUrl: './content-doc.component.css'
})
export class ContentDocComponent  implements OnInit {
  rubrique: string = '';

  contenu: { [key: string]: string } = {
    accueil: 'Bienvenue dans la documentation !',
    files: 'Gérez vos fichiers ici.',
    cloud: 'Services cloud et synchronisation.',
    phone: 'Utilisation des téléphones.',
    desktop: 'Utilisation sur un ordinateur.',
    tablet: 'Utilisation sur une tablette.'
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rubrique = params['rubrique'];
    });
  }

}
