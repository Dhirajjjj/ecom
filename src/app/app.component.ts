import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from './services/storage/user-storage.service';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ShoeX';
  isCustomerLoggedIn : boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn : boolean = UserStorageService.isAdminLoggedIn();
  constructor(private router:Router){ }
  ngOnInit():void{
    this.router.events.subscribe(event =>{
      this.isCustomerLoggedIn=UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn=UserStorageService.isAdminLoggedIn();
    })
  }
  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
