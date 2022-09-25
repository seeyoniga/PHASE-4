import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  //declare boolean variable to get form submitted  or not?
  submitted:boolean=false;

  //inject formbuilder dependency to create form with validators
  constructor(private builder:FormBuilder,private router:Router) { }

  //when component initiate we will write code here to build form with validators
  ngOnInit(): void {

    this.loginForm= this.builder.group(
      {
        email: [''],
        password: ['']
      }
    );
  }

  //when user will click on submit button - method will be called
  OnSubmitt(){
    this.submitted=true;
    if(this.loginForm.invalid){
      alert("Form not Filled Properly");
    }
    else if((this.loginForm.get('email')?.value== "admin@gmail.com") && (this.loginForm.get('password')?.value=="heyadmin")){
        alert("Logged In Successfully");
        this.router.navigate(["/adminhome"]);
    }
    else if((this.loginForm.get('email')?.value== "seeyo@gmail.com") && (this.loginForm.get('password')?.value=="heyseeyo")){
      alert("Logged In Successfully");
      this.router.navigate(["/userhome"]);
  }
    else{
      alert("Invalid Credentials");
    }
  }

  //to access the  form control in a view to display the error
  get f(){
    return this.loginForm.controls;
  }

}
