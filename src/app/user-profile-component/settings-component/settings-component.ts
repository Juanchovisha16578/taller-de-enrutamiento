import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent implements OnInit {
  trainerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario con validaciones
    this.trainerForm = this.fb.group({
      username: ['AshKetchum123', [Validators.required, Validators.minLength(3)]],
      region: ['Kanto', Validators.required]
    });
  }

  saveChanges() {
    if (this.trainerForm.valid) {
      console.log('Datos guardados:', this.trainerForm.value);
      alert('¡Perfil de Entrenador actualizado!');
      // Aquí llamarías a un servicio para guardar en una base de datos
    }
  }
}
