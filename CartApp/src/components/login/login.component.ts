import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm !: FormGroup
  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      // Validators: Minumum 1 girilsin, 18 yaş altı devam edemesin vb.
      // Required : Zorundalıklı. Bu formu onaylamak için verilen şartların sağlanması lazım.
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {

  }
}
