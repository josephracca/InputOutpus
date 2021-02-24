import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentMessage = "Okay this communication works...";
  
  
  // currentMessage = 'Hello';
  constructor() { }

  ngOnInit(): void {
  }

}
