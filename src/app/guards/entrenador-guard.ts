import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const entrenadorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuth = !!localStorage.getItem('trainerToken');

  if (isAuth) {
    return true;
  } else {
    router.navigate(['/inicio']); // Redirige si no está logueado
    return false;
  }
};
