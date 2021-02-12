import { Component, OnInit } from '@angular/core';
import { records } from '../records';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  records = records;
  constructor() {
  }
  ngOnInit(): void {
  }

}
