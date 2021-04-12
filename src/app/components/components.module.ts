import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { BoardsComponent } from './boards/boards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ComentsComponent } from './coments/coments.component';
import { CreateComponent } from './create/create.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { DrawerComponent } from './drawer/drawer.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CardsComponent,
    BoardsComponent,
    ComentsComponent,
    CreateComponent,
    CardEditComponent,
    DrawerComponent,
    AvatarComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CardsComponent,
    BoardsComponent,
    ComentsComponent,
    CreateComponent,
    CardEditComponent,
    DrawerComponent,
    AvatarComponent,
    ListComponent
  ]
})
export class ComponentsModule { }
