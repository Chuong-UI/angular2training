import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var _:any;

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      let currentUrl = '';
      let paths = _.filter(val.url.split('/'), (path) => {return path && path != 'admin'});
      this.breadcrumbs = _.map(paths, (item) => {
        currentUrl += item + '/';
        return {
          url: currentUrl,
          title: item.split('-').join(' ')
        }
      })
    });
  }

  breadcrumbs = [];

  ngOnInit() {
  }

}
