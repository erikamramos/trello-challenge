import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/boards.model';
import { CardsComponent } from '../cards/cards.component';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Card[] = [];
  
  constructor(public dialog?: MatDialog) {}

  ngOnInit(): void {
  }

  onSubmit() {
    //this.items.push(this.newcard);
  }


  createCard(): void {
    let dialogRef = this.dialog.open(CreateComponent, {
      width: '250px',
      data: { name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.items.push({
          title: result,
          id: null,
          comments: [],
        });
      }
    });
  }

}
