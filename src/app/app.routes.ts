import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { PokemonDetailComponent } from './pokemon-detail-component/pokemon-detail-component';
import { UserProfileComponent } from './user-profile-component/user-profile-component';
import { SettingsComponent } from './user-profile-component/settings-component/settings-component';
import { SecurityComponent } from './user-profile-component/security-component/security-component';

export const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'nosotros', component: AboutComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', component: NotFoundComponent   }, // Ruta para errores 404
    { path: 'pokemon/:nombre', component: PokemonDetailComponent },
    {
        path: 'perfil',
        component: UserProfileComponent,
        
        children: [
            { path: '', redirectTo: 'ajustes', pathMatch: 'full' },
            { path: 'ajustes', component: SettingsComponent },
            { path: 'seguridad', component: SecurityComponent }
    ]
}   
];
