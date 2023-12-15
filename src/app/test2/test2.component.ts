import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
      <span>组件内部实现 template 和 styles</span>
      <span class="selector_desc">组件 selector 支持 标签、类、属性选择器</span>
  `,
  styles: [`
    span {
      color: red;
      display: block;
    }
    .selector_desc {
      color: yellow;
    }
  `]
})
export class Test2Component {

}
