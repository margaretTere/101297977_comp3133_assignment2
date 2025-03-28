import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin = {
    email: '',
    password: ''
  };

  constructor(private router: Router){}

    submitForm(form: any){
      if(form.valid){
        this.goToEmployeeList();
      }
    }
    goToEmployeeList(){
        this.router.navigate(['employees'])
    }
  

}
