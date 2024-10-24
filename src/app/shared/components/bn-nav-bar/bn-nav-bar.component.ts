import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-bn-nav-bar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './bn-nav-bar.component.html',
  styleUrl: './bn-nav-bar.component.scss'
})

export class BnNavBarComponent {

  constructor() { }
}
