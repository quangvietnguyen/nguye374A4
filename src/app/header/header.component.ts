import { Component, OnInit, Input } from '@angular/core';
import { vietnguyen } from 'src/assets/data/nguye374Data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() name = vietnguyen.name;
  @Input() assignmentTitle = vietnguyen.assignmentTitle;
  ngOnInit(): void {
  }

}
