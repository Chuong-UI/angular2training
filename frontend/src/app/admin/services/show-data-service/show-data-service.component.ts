import { Component, OnInit } from '@angular/core';
import { TestdataService } from '../../../services/testdata.service';

@Component({
  selector: 'show-data-service',
  templateUrl: './show-data-service.component.html',
  styleUrls: ['./show-data-service.component.css']
})
export class ShowDataServiceComponent implements OnInit {
  
  constructor(private testDataService: TestdataService) { }

  ngOnInit() {
  }

  firstList = this.testDataService.listOne;
  secondList = this.testDataService.listTwo;
  thridList = this.testDataService.listThree;
}
