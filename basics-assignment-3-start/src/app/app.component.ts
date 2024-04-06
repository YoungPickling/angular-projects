import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false
  clickLog: string[] = []

  handleClick() {
    this.display = !this.display;

    const date = new Date(Date.now())
    this.clickLog.push( `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }
}
