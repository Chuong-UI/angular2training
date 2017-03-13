import { Injectable } from '@angular/core';

@Injectable()
export class TestdataService {

  constructor() { }
  public listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  public listTwo: Array<string> = ['Something else'];
  public listThree: Array<string> = [];
}
