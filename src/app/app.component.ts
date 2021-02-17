import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = [
    'Write outline',
    'Make slides',
    'Script demo',
    'Practice',
    'Practice some more',
    'Do the talk'
  ];

  done = [
    'Get dressed'
  ];

  drop($event: CdkDragDrop<string[]>): void {
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex);
    }
  }
}
