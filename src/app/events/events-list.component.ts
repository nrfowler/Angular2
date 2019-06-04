import {Component,OnInit} from '@angular/core'
import {EventService} from './shared/event.service';
import {ActivatedRoute} from '@angular/router'

import {ToastrService} from '../common/toastr.service'
declare let toastr
@Component({
  templateUrl:'./events-list.component.html'

})
export class EventsListComponent implements OnInit{
  events:any[]
  constructor(private route:ActivatedRoute,private eventService: EventService,private toastrService: ToastrService){
  }
  handleEventClicked(data){
    toastr.success(data.name)
  }
  ngOnInit(){
this.events=this.route.snapshot.data['events']
}}
