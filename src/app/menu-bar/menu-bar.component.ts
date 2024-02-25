import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})

export class MenuBarComponent {

  public isExpansive = false
  public expansive(isExpansive: boolean) {
    this.isExpansive = isExpansive
  }
}
