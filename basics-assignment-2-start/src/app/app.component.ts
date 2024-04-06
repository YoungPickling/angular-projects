import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ""
  interpolationString = ""

  updateName() {
    this.interpolationString = "The name is " + this.username
    this.username = ""
  }
}
