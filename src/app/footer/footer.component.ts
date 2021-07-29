import { Component, OnInit, Input } from '@angular/core';
import { vietnguyen } from 'src/assets/data/nguye374Data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Input() name = vietnguyen.name;
  @Input() studentNumber = vietnguyen.studentNumber;
  @Input() loginName = vietnguyen.loginName;
  @Input() campus = vietnguyen.campus;

  ngOnInit(): void {
  }

}
