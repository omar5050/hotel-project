import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth/service/auth.service';

export const userGuardGuard: CanActivateFn = (route, state) => {
  let auth=inject(AuthService)
  let _Router=inject(Router)
  

if(localStorage.getItem('role')=='user'){
  console.log(auth.isRole.value);
 
return true;
}
else{
  _Router.navigate(['/landing-page']);
  return false
}
};
