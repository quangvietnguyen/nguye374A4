import { Injectable } from '@angular/core';
import { nguye374 } from './type';
import { vietnguyen } from 'src/assets/data/nguye374Data';

@Injectable({
  providedIn: 'root'
})
export class ReadDataService {

  constructor() { }

  loadMyClasses(): nguye374 {
    return vietnguyen;
  }
}
