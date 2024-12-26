import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  // Aquí se importan los módulos y componentes necesarios
  imports: [CommonModule, FormsModule, IonicModule, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  // Variable que almacena la figura seleccionada desde el ion-select
  figuraSeleccionada: string | null = null;

  // Método para manejar el cambio de selección
  onSeleccionarFigura(figura: string) {
    this.figuraSeleccionada = figura;
  }
}
