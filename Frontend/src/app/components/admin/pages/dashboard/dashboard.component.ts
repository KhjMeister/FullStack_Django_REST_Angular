import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
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

isSideMenuOpen = false;

toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen
}
closeSideMenu() {
    this.isSideMenuOpen = false
}
dark = false
toggleTheme() {
  this.dark = !this.dark
  // setThemeToLocalStorage(this.dark)
}

isNotificationsMenuOpen= false 
toggleNotificationsMenu() {
  this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
}
closeNotificationsMenu() {
  this.isNotificationsMenuOpen = false
}
isProfileMenuOpen= false
toggleProfileMenu() {
  this.isProfileMenuOpen = !this.isProfileMenuOpen
}
closeProfileMenu() {
  this.isProfileMenuOpen = false
}
isPagesMenuOpen= false
togglePagesMenu() {
  this.isPagesMenuOpen = !this.isPagesMenuOpen
}
  
isModalOpen= false
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
