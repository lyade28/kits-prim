import { Routes } from "@angular/router";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { MainPortailComponent } from "../../layouts/main-portail/main-portail.component";
import { CloudSignComponent } from "./components/documentations/components/cloud-sign/cloud-sign.component";
import { EmSignComponent } from "./components/documentations/components/em-sign/em-sign.component";
import { ContactComponent } from "./components/Contact/contact/contact.component";
import {
  ContentDocComponent
} from './components/documentations/components/cloud-sign/components/content-doc/content-doc.component';


export const PortailRoutes: Routes = [
    {
        path: "",
        component: MainPortailComponent,
        children: [
            {
                path: "accueil",
                component: AccueilComponent,
            },
            {
                path: "cloud-sign",
                component: CloudSignComponent,
                children: [

                      { path: ':rubrique', component: ContentDocComponent } // Route dynamique pour le contenu

                    ,
                  { path: '**', redirectTo: 'cloud-sign/accueil' } // Redirection par défaut
                ],
            },
            {
                path: "Em-sign",
                component: EmSignComponent,
            },
            {
                path: "Contact",
                component: ContactComponent,
            },
        ],

    },
    { path: "", redirectTo: "accueil", pathMatch: "full" },
];

