import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidecontent',
  templateUrl: './sidecontent.component.html',
  styleUrls: ['./sidecontent.component.scss']
})
export class SidecontentComponent implements OnInit {
  @Input() message = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
