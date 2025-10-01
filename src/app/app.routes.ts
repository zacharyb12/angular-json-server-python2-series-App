import { Routes } from '@angular/router';

export const routes: Routes = [

    {path : '' , loadComponent: () => import('../components/pages/homepage/homepage').then(m => m.Homepage)},
    {path : 'register' , loadComponent: () => import('../components/pages/register/register').then(m => m.Register)},


    // Admin Router
    {path : 'admin' , loadComponent: () => import('../components/pages/admin/admin-router/admin-router').then(m => m.AdminRouter) , children : [
        {path : 'user-list' , loadComponent: () => import('../components/pages/admin/user-list/user-list').then(m => m.UserList)},
    ]},

    // User Router
    {path : 'user' , loadComponent: () => import('../components/pages/user/user-router/user-router').then(m => m.UserRouter) , children : [
        {path : 'details/:id' , loadComponent: () => import('../components/pages/user/user-details/user-details').then(m => m.UserDetails)},
        {path : 'edit/:id' , loadComponent: () => import('../components/pages/user/edit-user/edit-user').then(m => m.EditUser)},
    ]},

    {path : "series" , loadComponent: () => import('../components/pages/series/series-router/series-router').then(m => m.SeriesRouter), children : [
        {path : 'list' , loadComponent: () => import('../components/pages/series/series-list/series-list').then(m => m.SeriesList)},
        {path : 'game-of-thrones' , loadComponent: () => import('../components/pages/series/games-of-thrones/games-of-thrones').then(m => m.GamesOfThrones)},
        {path : 'Lotr' , loadComponent: () => import('../components/pages/series/lotr/lotr').then(m => m.Lotr)},
    ]}


];
