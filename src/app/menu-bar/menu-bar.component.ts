import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})

export class MenuBarComponent {
  public menuItem = [
    { texto: 'Home', caminho: '/home' },
    { texto: 'Sobre', caminho: '/sobre' },
    { texto: 'Contato', caminho: '/contato' }
  ];
  public activeItem = 0;
  public isExpansive = false
  public expansive(isExpansive: boolean) {
    this.isExpansive = isExpansive
  }

  setActive(index: number): void {
    this.activeItem = index; 
  }
}
