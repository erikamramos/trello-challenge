import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  @Input("titleBoard") title: string;

  constructor() { }

  ngOnInit(): void {
  }

} 
