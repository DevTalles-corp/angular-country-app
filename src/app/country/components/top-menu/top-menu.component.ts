import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'country-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {}
