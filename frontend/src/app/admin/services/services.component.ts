import { Component, OnInit } from '@angular/core';
import { TestdataService } from '../../services/testdata.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private testDataService: TestdataService) { }

  ngOnInit() {
  }

  listOne = this.testDataService.listOne;
  listTwo = this.testDataService.listTwo;
  listThree = this.testDataService.listThree;


  onDropSuccess = (param1, param2) => {
    console.log('Dropped');
  }

}
