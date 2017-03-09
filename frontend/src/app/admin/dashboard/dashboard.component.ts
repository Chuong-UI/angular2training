import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

   events = [
    {
        title  : 'event1',
        start  : '2017-03-01'
    },
    {
        title  : 'event2',
        start  : '2017-03-05',
        end    : '2017-03-07'
    },
    {
        title  : 'event3',
        start  : '2017-03-09T12:30:00',
        allDay : false // will make the time show
    }
  ];

  todoList = [
    {
      title: 'First task'
    },
    {
      title: 'Second task'
    },
    {
      title: 'Lorem ipsum',
      finished: true
    },
    {
      title: 'Last task'
    }
  ]
  todoList2 = [
    {
      title: 'Another task'
    },
    {
      title: 'Second task'
    },
    {
      title: 'Lorem ipsum',
      finished: true
    },
    {
      title: 'Last task'
    }
  ]

  updateTask = (task) => {
    console.log(task);
  }

  calendarEventClick = (calEvent) => {
    console.log(calEvent);
  }



  ngOnInit() {
  }

}
