import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.css']
})
export class SummaryBoxComponent implements OnInit {

  constructor() { }
  @Input() boxTitle: string;
  @Input() label: string;
  @Input() labelStatus: string;
  @Input() title: string;
  @Input() performance: Number;
  @Input() value: Number;

  ngOnInit() {
  }

}
