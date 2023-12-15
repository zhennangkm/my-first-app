import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})

export class Test1Component {
  tempNum: number = 0;
  tempStr: string = 'hello';
  tempArr: string[] = ['hello', 'world', 'fe', 'angular', 'react', 'vue'];
  tempFunc(): string {
    return `${this.tempStr} ${this.tempNum}`
  }

  allowCreate: boolean = true;
  onCreate() {
    this.tempStr = 'hello world';
  }
  onUpdate(e: Event) {
    this.tempStr = (<HTMLInputElement>e.target).value;
  }

  getColor() {
    return '#5778ff'
  }

  constructor() {
    setTimeout(() => {
      this.allowCreate = false;
    }, 2000);
  }
}
