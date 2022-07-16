import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  @Input() isSideMenuOpen:boolean= false;

// isSideMenuOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }



toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen
}
closeSideMenu() {
    this.isSideMenuOpen = false
}

// isPagesMenuOpen:boolean= false
togglePagesMenu() {
  this.isSideMenuOpen = !this.isSideMenuOpen
 
}

}
