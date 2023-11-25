import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../authentication/service/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit{
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginProv: AuthService) {
  }
  ngOnInit(): void {
    this.myForm = this.createMyForm();
    //this.loginProv.ngOnInit();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      notifications: [true]
    });
  }

  public submitFormulario(){
    if (this.myForm.invalid){
      return
    }

    this.loginProv.signIn(this.myForm.value).subscribe(
      (response) => {
        console.log('Profesor creado exitosamente', response);
      },
      (error) => {
        console.error('Error al crear profesor', error);
      }
    );
  }
  enableMessages(b: boolean){
    return b
  }
}
