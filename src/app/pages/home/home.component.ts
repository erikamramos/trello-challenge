import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/boards.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public boards: Board[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getBoards();
  }

  public getBoards(){
    this.http.get('assets/data/boards.json').subscribe((data:Board[])=>{
      this.boards = data;
      console.log(data)
    },
    error=>{

    });
  }

  public addEditTalk(){

  }

  public onTalkDrop(){

  }
}
