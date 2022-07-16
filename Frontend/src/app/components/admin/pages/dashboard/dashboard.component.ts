import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

isSideMenuOpen:boolean = false
send(status:boolean){
    this.isSideMenuOpen = status;
  
  }
  constructor() { }

  ngOnInit(): void {
  }


// function getThemeFromLocalStorage() {
//   if (window.localStorage.getItem('dark')) {
//     return JSON.parse(window.localStorage.getItem('dark'))
//   }
//   return (
//     !!window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches
//   )
// }

// setThemeToLocalStorage(value) {
//   window.localStorage.setItem('dark', value)
// }

dark:boolean = false
toggleTheme() {
  this.dark = !this.dark
  // setThemeToLocalStorage(this.dark)
}

isNotificationsMenuOpen:boolean= false 
toggleNotificationsMenu() {
  this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
}
closeNotificationsMenu() {
  this.isNotificationsMenuOpen = false
}




  
isModalOpen:boolean= false
trapCleanup= null
openModal() {
    this.isModalOpen = true
    // this.trapCleanup = focusTrap(document.querySelector('#modal'))
  }
closeModal() {
  this.isModalOpen = false
  // this.trapCleanup()
}



}
