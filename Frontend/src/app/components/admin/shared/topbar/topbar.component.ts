import { Component,EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Output() emitter:EventEmitter<boolean> = new EventEmitter<boolean>();

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


emit(){

this.status = !this.status; 
this.emitter.emit(this.status)
}


isProfileMenuOpen:boolean= false
toggleProfileMenu() {
  console.log(this.isProfileMenuOpen)
  this.isProfileMenuOpen = !this.isProfileMenuOpen
}
closeProfileMenu() {
  this.isProfileMenuOpen = false
}

}
