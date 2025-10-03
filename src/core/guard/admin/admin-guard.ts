import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  const role = localStorage.getItem('role');

  const router = inject(Router);

  if (role === 'admin') {
    return true;
  }

  router.navigate(['/']);
  return false;
};
