import { Component, OnInit } from '@angular/core';
import { records } from '../records';


@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  records = records;

  jdate: string = ''  ; 
  distance: string = ''; 
  time: string = ''; 
  
  savedButton(): void {

    this.records.push({ jdate: this.jdate, distance: this.distance, time: this.time})
    alert('The data were successfully added!')
  }
  
  constructor() { }
  ngOnInit(): void {
  }

}
