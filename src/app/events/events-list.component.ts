import {Component,OnInit} from '@angular/core'
import {ToastrService} from '../common/toastr.service'
declare let toastr
@Component({
  selector: 'events-list',
  templateUrl:'./events-list.component.html'

})
export class EventsListComponent implements OnInit{
  events:any[]
  eventsService
  constructor(private eventService: EventService,private toastrService: ToastrService){
    this.events=this.eventSerice.getEvents();
  }
  handleEventClicked(data){
    toastr.success(data.name)
  }
  ngOnInit(){
    this.events=this.eventService.getEvents();
  }
}
