import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  //declare boolean variable to get form submitted  or not?
  submitted:boolean=false;

  //inject formbuilder dependency to create form with validators
  constructor(private builder:FormBuilder) { }

  //when component initiate we will write code here to build form with validators
  ngOnInit(): void {

    this.loginForm= this.builder.group(
      {
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,Validators.minLength(8)]]
      }
    );
  }

  //when usewr will click on submit button - method will be called
  OnSubmitt(){
    this.submitted=true;
    if(this.loginForm.invalid)
      return;
    else
      alert("Logged In Successfully");
  }

  //to access the  form control in a view to display the error
  get f(){
    return this.loginForm.controls;
  }

}
