import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
password: any;
Username: any

constructor( 
  private router :Router,
  // private toaster: ToastrService,
  )
{

}

submit(){
  // if(this.Username === "Rhythm"){
    this.router.navigateByUrl('/home/home-page')
  // }
  // else{
  //   this.toaster.error("Try a diffrent user")
  // }
}

}
