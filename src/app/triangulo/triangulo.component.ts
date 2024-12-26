import { Component } from '@angular/core';
import { TrianguloEscaleno, TrianguloEquilatero } from '../modelo/figuras';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class TrianguloComponent {
  tipoTriangulo: string = 'escaleno';
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.tipoTriangulo === 'escaleno') {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.perimetro = triangulo.calcularPerimetro();
    } else if (this.tipoTriangulo === 'equilatero') {
      const triangulo = new TrianguloEquilatero(this.ladoA);
      this.perimetro = triangulo.calcularPerimetro();
    }
  }
}