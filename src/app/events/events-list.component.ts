import {Component,OnInit} from '@angular/core'
import {EventService} from './shared/event.service';

import {ToastrService} from '../common/toastr.service'
declare let toastr
@Component({
  templateUrl:'./events-list.component.html'

})
export class EventsListComponent implements OnInit{
  events:any[]
  constructor(private eventService: EventService,private toastrService: ToastrService){
    this.events=this.eventService.getEvents();
  }
  handleEventClicked(data){
    toastr.success(data.name)
  }
  ngOnInit(){
    this.events=this.eventService.getEvents();
  }
}
