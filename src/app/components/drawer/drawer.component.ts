import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from 'src/app/models/boards.model';
import { BoardService } from 'src/app/services/board.service';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'] 
})
export class DrawerComponent implements OnInit {

  boards: Board[];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private boardService: BoardService
  ) {
    this.boards = boardService.getBoards();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  ngOnInit(): void {
  }

}
