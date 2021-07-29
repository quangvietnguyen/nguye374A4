import { Component } from '@angular/core';
import { vietnguyen } from 'src/assets/data/nguye374Data';
import { ReadDataService } from './read-data.service';
import { covid } from './type';
import data from '../assets/data/covidsummary.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nguye374A4';

  myclasses = vietnguyen;

  constructor(private myService: ReadDataService) { }

  ngOnInit(): void {
    this.loadMyClasses();

  }

  loadMyClasses(): void {
    this.myclasses = this.myService.loadMyClasses();
  }

  covidData: covid[] = data;
}
