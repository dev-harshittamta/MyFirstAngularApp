import { Component } from '@angular/core';
@Component({
  selector: 'new-Component',
  templateUrl: './newComponent.component.html',
  styles: [
    `
      p {
        color: red;
      }
      div {
        color: darkgrey;
        background-color: cyan;
        border: 1px solid black;
        border-radius: 5px;
      }
    `,
  ],
})
export class NewComponent {}
