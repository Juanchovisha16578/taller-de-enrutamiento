import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './security-component.html',
  styleUrl: './security-component.css',
})
export class SecurityComponent {
  securityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.securityForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { 
      validators: this.passwordMatchValidator // Validación personalizada
    });
  }

  // Validador para asegurar que las contraseñas sean iguales
  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  updatePassword() {
    if (this.securityForm.valid) {
      console.log('Cambiando contraseña...');
      // Lógica para enviar al servidor (Node.js / Firebase)
    } else {
      alert('Las contraseñas no coinciden o son muy cortas.');
    }
  }
}
