import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trello-challenge';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.createSvgIcons();
  }

  private createSvgIcons(){
    this.matIconRegistry.addSvgIcon('icon_home_app', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
    this.matIconRegistry.addSvgIcon('icon_add_app', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
    this.matIconRegistry.addSvgIcon('icon_plus_app', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
    this.matIconRegistry.addSvgIcon('icon_close_app', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg'));
  }
}
