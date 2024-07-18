import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  childAccessMethodModel!: string;
  @ViewChild('childRef') childRefElement!: ChildComponent; // ElementRef of type can also be given,ChildComponent given here because it refers to ChildComponent 

  changeChildTitle() {
    this.childRefElement.title = "Updated child title from parent";
  }

  accessChildMethod() {
    this.childRefElement.childData(this.childAccessMethodModel);
  }
}
