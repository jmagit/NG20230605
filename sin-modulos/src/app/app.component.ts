import { Component } from '@angular/core';
import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault, UpperCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sin-modulos';
}
