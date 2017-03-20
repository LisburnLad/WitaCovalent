import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';

export interface IRecentActivity
{
    user: string,
    item: string,
    primary: string,
    itemId: string,
    image: string,
    width: number,
    height: number,
    type: string,
    iconCls: string,
    iconPos: string,
    category: string,
    categoryId: string,
    path: string,
    activityDate: string
}

@Injectable()
export class RecentActivityService extends RESTService<IRecentActivity> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/recent-activity',
    });
  }

  staticQuery(): Observable<IRecentActivity[]> {
    return this._http.get('data/recent-activity.json')
    .map((res: Response) => {
      return res.json();
    });
  }
}
