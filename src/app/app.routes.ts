import { Routes } from '@angular/router';
import { adminGuard } from '../core/guard/admin/admin-guard';

export const routes: Routes = [

    {path : '' , loadComponent: () => import('../components/pages/homepage/homepage').then(m => m.Homepage)},
    {path : 'register' , loadComponent: () => import('../components/pages/register/register').then(m => m.Register)},


    // Admin Router
    {path : 'admin' ,
        canActivateChild : [adminGuard] , 
        loadComponent: () => import('../components/pages/admin/admin-router/admin-router').then(m => m.AdminRouter) , 
        children : [
        {path : 'user-list' , loadComponent: () => import('../components/pages/admin/user-list/user-list').then(m => m.UserList)},
    ]},
    
    // User Router
    {path : 'user' , loadComponent: () => import('../components/pages/user/user-router/user-router').then(m => m.UserRouter) , children : [
        {path : 'details/:id' , loadComponent: () => import('../components/pages/user/user-details/user-details').then(m => m.UserDetails)},
        {path : 'edit/:id' , loadComponent: () => import('../components/pages/user/edit-user/edit-user').then(m => m.EditUser)},
    ]},
    
    {path : "series" , loadComponent: () => import('../components/pages/series/series-router/series-router').then(m => m.SeriesRouter), children : [
        {path : 'list' , loadComponent: () => import('../components/pages/series/series-list/series-list').then(m => m.SeriesList)},
        
        {path : 'game-of-thrones' , loadComponent: () => import('../components/pages/series/games-of-thrones-components//games-of-thrones/games-of-thrones').then(m => m.GamesOfThrones)},
        {path : 'got-book-details/:id' , loadComponent: () => import('../components/pages/series/games-of-thrones-components/got-book-details/got-book-details').then(m => m.GotBookDetails)},
        {path : 'got-character-details/:id' , loadComponent: () => import('../components/pages/series/games-of-thrones-components/got-character-details/got-character-details').then(m => m.GotCharacterDetails)},
        {path : 'got-house-details/:id' , loadComponent: () => import('../components/pages/series/games-of-thrones-components/got-house-details/got-house-details').then(m => m.GotHouseDetails)},
        
        {path : 'Lotr' , loadComponent: () => import('../components/pages/series/lotr-components/lotr/lotr').then(m => m.Lotr)},
        {path : 'lotr-character-details/:id' , loadComponent: () => import('../components/pages/series/lotr-components/lotr-character-details/lotr-character-details').then(m => m.LotrCharacterDetails)},
        {path : 'lotr-movie-details/:id' , loadComponent: () => import('../components/pages/series/lotr-components/lotr-movie-details/lotr-movie-details').then(m => m.LotrMovieDetails)},
        
        {path : 'futurama' , loadComponent: () => import('../components/pages/series/futurama-component/futurama/futurama').then(m => m.Futurama)},
        {path : 'futurama-character-details/:id' , loadComponent: () => import('../components/pages/series/futurama-component/futurama-character-details/futurama-character-details').then(m => m.FuturamaCharacterDetails)},
        {path : 'futurama-episode-details/:id' , loadComponent: () => import('../components/pages/series/futurama-component/futurama-episode-details/futurama-episode-details').then(m => m.FuturamaEpisodeDetails)},
    ]},
    {path : '**' , redirectTo : '' , pathMatch : 'full'},
    
    
];
