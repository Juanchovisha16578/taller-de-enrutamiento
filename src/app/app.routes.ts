import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { PokemonDetailComponent } from './pokemon-detail-component/pokemon-detail-component';
import { UserProfileComponent } from './user-profile-component/user-profile-component';
import { SettingsComponent } from './user-profile-component/settings-component/settings-component';
import { SecurityComponent } from './user-profile-component/security-component/security-component';
import { Captura } from './components/captura/captura';
import { entrenadorGuard } from './guards/entrenador-guard';
import { gymGuard } from './guards/gym-guard';
//import { LigaComponent } from './components/liga/liga.component'; // Me da error y no se porque

export const routes: Routes = [
    /* - Implementación de rutas en Angular - */

    /* Ej1) Rutas básicas - navegación simple 

    path: permitira ver las rutas en el navegador
    component: Es el componente que Angular "dibujará" cuando la URL coincida.
    Si el usuario entra directamente a la raiz, lo redirigira a inicio*/
    { path: 'inicio', component: HomeComponent },
    { path: 'nosotros', component: AboutComponent },// Ruta para saber que es un Pokemon
    
    /* Ej2) Rutas con parámetros (Rutas Dinámicas) */
    //Es una ruta que cambia dependiendo del id o el nombre
    //Cómo leer el parámetro en el componente (pokemon-detail.component.ts):
    { path: 'pokemon/:nombre', component: PokemonDetailComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
    
    
    /* Ej3) Rutas hijas (Nested Routes) 
    
    Es este caso tenemos el perfil de usuario que hará de entrenador, y dentro de ese perfil habran unos ajustes
    y la parte de seguridad, y el routerLink se usa en el app.html para la navegación entre rutas*/
    {
        path: 'perfil',
        component: UserProfileComponent,
        
        children: [
            { path: '', redirectTo: 'ajustes', pathMatch: 'full' },
            { path: 'ajustes', component: SettingsComponent },
            { path: 'seguridad', component: SecurityComponent }
        ]
    },

// RUTA NO PROTEGIDA 
    { path: 'captura', component: Captura },
    
  // RUTA PROTEGIDA POR SESIÓN
    { 
        path: 'perfil', 
        component: UserProfileComponent, 
        canActivate: [entrenadorGuard] 
    },

  // RUTA PROTEGIDA POR LÓGICA (MEDALLAS)
    { 
        path: 'liga-pokemon', 
        //component: LigaComponent, 
        canActivate: [gymGuard] 
    },
    //**: Es un comodín. Si el usuario escribe cualquier cosa que no existe, muestra un componente de error.
    { path: '**', component: NotFoundComponent   }, // Ruta para errores 404
];
