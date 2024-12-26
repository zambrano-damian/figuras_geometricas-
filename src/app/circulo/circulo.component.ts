import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    this.perimetro = 2 * Math.PI * this.radio;
  }
}