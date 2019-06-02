import {Component, Input, Output, EventEmitter} from '@angular/core'
@Component({
  selector: 'event-thumbnail',
  template:
  `<div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div class="pad-left">{{event?.city}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()">Method 1</button>
  </div>`,
  styles:
  [
  `.pad-left:{margin-left: 10px;}
  .well div{color:red;}
  `
  ]

})
export class EventThumbnailComponent{
@Input() event:any
@Output() eventClick = new EventEmitter()
handleClickMe(){
  console.log("Works")
  this.eventClick.emit(this.event.name)
}
blarg:any="I am in thumbnail class"
logFoo(){
  console.log("foo")
}
}
