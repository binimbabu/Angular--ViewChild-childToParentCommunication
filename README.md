View child with  child to parent communication

transmit data from  child to parent component using @ViewChild ( here child to parent  communication done without using @Output rather using @ViewChild)


child.component.ts


export class ChildComponent {
title: string = 'Child data';
}


child.component.html

{{title}}


app.component.ts

export class AppComponent {
  @ViewChild('childRef') childRefElement! : ChildComponent; // ElementRef of type can also be given,ChildComponent given here because it refers to ChildComponent 

  changeChildTitle(){
    this.childRefElement.title = "Updated child title from parent";
  }
}


Since the childRefElement is declared of type ChildComponent, childRefElement variable will have access to all variables and method declared in child.component.ts. In this piece of code  ' this.childRefElement.title = "Updated child title from parent"; ' we are updating the title value from parent component ts as "Updated child title from parent" from child.component.ts value for title ' title: string = 'Child data'; '



app.component.html

<h1>View child with components</h1>
<app-child #childRef></app-child>
<button (click)="changeChildTitle()">Change Child Title</button>


ngOnChanges lifecycle hook cannot be used in child.component.ts because @Input is not used in child.component.ts for parent to child communication rather we are using here @ViewChild.

Another example

child.component.ts

export class ChildComponent {
  title: string = 'Child data';
  childData(titleChange: string) {
    this.title = titleChange;
  }
}


child.component.html

<div>
    <p>{{title}}</p>
</div>



app.component.html


<h1>View child with components</h1>
<app-child #childRef></app-child>
<input type="text" [(ngModel)]="childAccessMethodModel"/>
<button (click)="accessChildMethod()">Access child methods</button>
<br>
<button (click)="changeChildTitle()">Change Child Title</button>


app.component.ts


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


Here childRefElement in parent component that is app.component.ts (this.childRefElement.childData(this.childAccessMethodModel); ) accessing childData method from child component.ts

If we are making title as private in child.scomponent.ts (i,e. private title: string = 'Child data';) then childRefElement in parent component (app.component.ts) cannot access the 'title' in app.component.ts (here parent component) because title declared as private.
But if we give title private (i,e. private title: string = 'Child data';) and declaring childRefElement of type any ( i.e  @ViewChild('childRef') childRefElement!: any; ) then childRefElement ( this.childRefElement.title = "Updated child title from parent";) can access 'title' in child.component.ts even if its declared private ( Since childRefElement is declared any instead of ChildComponent) .
