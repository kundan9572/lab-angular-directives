import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-angular-directives';

  showColor: any = false;

  public changeColor(): void {
    this.showColor = this.showColor;
  }
}
