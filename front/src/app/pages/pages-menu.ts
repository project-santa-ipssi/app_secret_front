import { NbMenuItem } from '@nebular/theme';
import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(role): Observable<NbMenuItem[]> {
    const dashboardMenu = [
      
      {
        title: 'GENERAL',
        icon: 'npm-outline',
        expanded: true,
        children: [
          {
            title: 'HOME',
            link: '/pages/dashboard',
            icon: 'home-outline',
          },
        
        ],
      },
      {
        title: 'RESOURCES',
        icon: 'calendar-outline',
        expanded: true,
        children: [
          {
            title: 'tirage',
            link: '/pages/mysys/meteo-project',
            icon: 'people-outline',
          },
          
          // {
          //   title: 'cadeaux',
          //   link: '/pages/mysys/meteo-project',
          //   icon: 'credit-card-outline',
          // },
         
        ],
      },
      
    ];
    return observableOf([...dashboardMenu/* , ...menu */]);
  }
}
