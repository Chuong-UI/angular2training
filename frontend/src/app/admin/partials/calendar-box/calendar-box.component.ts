import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'calendar-box',
  templateUrl: './calendar-box.component.html',
  styleUrls: ['./calendar-box.component.css']
})
export class CalendarBoxComponent implements OnInit {

  @Input() events: any[];

  @Output() eventClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.events);
    let calendarOptions = {
      events: this.events || [],
      eventClick: (calEvent, jsEvent, view) => {
        console.log('Clicked')
        this.eventClick && this.eventClick.next(calEvent);
      },
      editable: true,
      droppable: true,
      eventDrop: (event, delta, revertFunc, jsEvent, ui, view) => {
        console.log(event);
      }
    };

    $('.calendar').fullCalendar(calendarOptions);
  }

}
