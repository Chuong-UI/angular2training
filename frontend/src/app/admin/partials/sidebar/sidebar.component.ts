import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var _:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      let paths = _.filter(val.url.split('/'), (path) => {return path});
      _.forEach(this.items, (item) => {
        if (!item.children && item.url == paths[paths.length-1]) {
          item.active = true;
        }
        else {
          item.active = false;
          if (item.children) {
            _.forEach(item.children, (child) => {
              if (child.url == paths[paths.length-1]) {
                child.active = true;
                item.opened = true;
              }
              else {
                child.active = false;
              }
            })
          }
        }
      })
    });
  }

  items = [
    {
      title: 'Dashboard',
      icon: 'fa-th-large',
      url: 'dashboard'
    },
    {
      title: 'Charts',
      icon: 'fa fa-bar-chart',
      url: 'charts'
    },
    {
      title: 'Graphs',
      icon: 'fa-bar-chart-o',
      url: '#',
      opened: false,
      children: [
        {
          title: 'Line chart',
          url: 'line-chart'
        },
        {
          title: 'Bar Chart',
          url: 'bar-chart'
        },
        {
          title: 'Pie Chart',
          url: 'pie-chart'
        }
      ]
    },
    {
      title: 'Graphs 2',
      icon: 'fa-bar-chart-o',
      url: '#',
      opened: false,
      children: [
        {
          title: 'Line chart',
          url: '#'
        },
        {
          title: 'Bar Chart',
          url: '#'
        },
        {
          title: 'Pie Chart',
          url: '#'
        }
      ]
    },
  ];
  clickOnItem = (item) => {
    if (item.children) {
      item.opened = !item.opened;
    }
    else {
      this.changeState(item);
    }
  }
  changeState = (item) => {
    if (item.url && item.url!='#') {
      this.router.navigate(['admin/'+item.url]);
    }
  }
  ngOnInit() {
  }

}
