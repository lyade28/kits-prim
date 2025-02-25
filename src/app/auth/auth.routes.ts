import { Routes } from "@angular/router";
import { MainguestComponent } from "../../layouts/mainguest/mainguest.component";
import { LoginComponent } from "./components/login/login.component";




export const authRoutes: Routes = [
    {
        path: '',
        component: MainguestComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },

            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ]
    }
];
