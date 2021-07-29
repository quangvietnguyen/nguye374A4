import { Component, OnInit } from '@angular/core';
import { vietnguyen } from 'src/assets/data/nguye374Data';
import { ReadDataService } from '../read-data.service';
import { nguye374, covid } from '../type';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  myclasses: nguye374 = vietnguyen;

  constructor(private myService: ReadDataService) { }

  ngOnInit(): void {
    this.loadMyClasses();
  }

  loadMyClasses(): void {
    this.myclasses = this.myService.loadMyClasses();
  }

}
