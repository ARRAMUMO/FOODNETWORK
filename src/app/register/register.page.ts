import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { last } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  errorMessage: any;
  formErrors = {
    email: [
      { type: 'required', message: 'El correo es obligatorio' },
      { type: 'email', message: 'El correo no es valido' }
    ],
    name: [
      { type: 'required', message: 'El nombre es obligatorio' },
      { type: 'pattern', message: 'El nombre no es valido' }
    ],
    lastname: [
      { type: 'required', message: 'El apellido es obligatorio' },
      { type: 'pattern', message: 'El apellido no es valido. coloca sin caracter especial' }
    ],
    username: [
      { type: 'required', message: 'El nombre de usuario es obligatorio' },
      { type: 'username', message: 'El nombre de usuario no es valido' }
    ],

    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres' }
    ],

    confirmPassword: [
      { type: 'required', message: 'La confirmación de la contraseña es obligatoria' },
      { type: 'areEqual', message: 'Las contraseñas no coinciden' }
    ]


  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
       
      ]))
      
      
    })
  }

  ngOnInit() {
  }

  registerUser(registerData: any){
    this.authService.register(registerData).then(res => {
      console.log(res);
      this.errorMessage = '';
      this.navCtrl.navigateForward('/login');
    }).catch(err => {
      console.log(err);
      this.errorMessage = err;
    });
  }

}
