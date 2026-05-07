import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const gymGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const medallas = Number(localStorage.getItem('medallas') || '0');

  if (medallas >= 8) {
    return true;
  } else {
    alert('¡Alto! Necesitas 8 medallas para entrar a la Liga Pokémon.');
    router.navigate(['/inicio']);
    return false;
  }
};
