import { Injectable } from '@angular/core';
import { database } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}
  getData(){
    return database
  }
  getSingle(id:any){
    return database[id]
  }
}