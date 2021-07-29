import { Component, OnInit, Input } from '@angular/core';
import { covid } from '../type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  @Input() dataList!: covid[];

  ngOnInit(): void {
  }

}
