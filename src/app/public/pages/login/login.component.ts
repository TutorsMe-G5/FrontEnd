import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../authentication/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public myForm!: FormGroup;
  public signIn: boolean;

  constructor(private fb: FormBuilder, private loginProv: AuthService) {
    this.signIn = false;
  }
  ngOnInit(): void {
    this.myForm = this.createMyForm();
    this.loginProv.ngOnInit();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public submitFormulario(){
    if (this.myForm.invalid){
      return
    }

    if (!this.loginProv.logIn(this.myForm.value)){
      alert("Invalid user or password")
    }
  }

  hideThis(){

  }

}
