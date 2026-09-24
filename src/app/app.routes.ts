import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'register', component: Register, title: 'Register | Diva'  },
  { path: 'login', component: Login, title: 'Login | Diva'  },
  { path: 'home', component: Home, title: 'Diva'  },
];
