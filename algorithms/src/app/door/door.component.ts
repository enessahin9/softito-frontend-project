import { Component } from '@angular/core';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [],
  templateUrl: './door.component.html',
  styleUrl: './door.component.scss'
})
export class DoorComponent {
  isDoorOpen = false;

  toggleDoor() {
    this.isDoorOpen = !this.isDoorOpen;
  }
}
