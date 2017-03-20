import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { RecentActivity } from './recent-activity';

import { RecentActivityService, IRecentActivity } from '../../services';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss'],
  viewProviders: [ RecentActivityService ],
})
export class RecentActivityComponent implements OnInit {

  title = 'Recent Activity Bla'; 

  products: IRecentActivity[] = [];

  constructor(private _router: Router, 
              private _recentActivityService: RecentActivityService, 
              private _route: ActivatedRoute) {}

  goBack(): void {
    this._router.navigate(['/dashboard-product']);
  }

  ngOnInit(): void 
  {
      // Get the data from the server
      this._recentActivityService.staticQuery().subscribe(
          data => {
              if (Array.isArray(data)){
                  this.products=data;
              } else{
                  this.products.push(data);
              }
          },
          err =>
              console.log("Can't get products. Error code: %s, URL: %s ",  err.status, err.url),
          () => console.log('Product(s) are retrieved')
      );
  }
}
