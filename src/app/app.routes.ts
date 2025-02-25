import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "auth",
        loadChildren: () =>
            import("./auth/auth.routes").then(
                (routes) => routes.authRoutes
            ),
    },
    {
        path: "",
        loadChildren: () =>
            import("./front-office/front.routes").then(
                (routes) => routes.PortailRoutes
            ),
    },
    { path: "", redirectTo: "Accueil", pathMatch: "full" },

];
