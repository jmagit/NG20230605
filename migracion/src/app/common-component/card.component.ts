import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
    <div class="card">
        <div class="card-header">{{ header }}</div>
        <div class="card-body">
          <h5 class="card-title"><ng-content select="[titulo]"></ng-content></h5>
          <div class="card-text"><ng-content></ng-content></div>
        </div>
    </div>
  `,
    standalone: true
})

export class CardComponent {
  @Input() header: string = 'this is header';
}
