import { Injectable } from '@angular/core';
import { Board } from 'src/app/models/boards.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  //private _boards: Board[] = require('./data.json');

  private _boards: Board[] = [];


  getBoards(): Board[] {
    return this._boards;
  }
  constructor() { }
}
