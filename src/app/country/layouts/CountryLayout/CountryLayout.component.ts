import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent {}
