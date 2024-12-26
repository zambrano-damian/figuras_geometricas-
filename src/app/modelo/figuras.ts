export abstract class FiguraGeometrica {
    constructor(public nombre: string) {}
    abstract calcularPerimetro(): number;
  }
  
  export class Circulo extends FiguraGeometrica {
    constructor(public radio: number) {
      super('Círculo');
    }
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(public ladoA: number, public ladoB: number, public ladoC: number) {
      super('Triángulo Escaleno');
    }
    calcularPerimetro(): number {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  }
  
  export class TrianguloEquilatero extends FiguraGeometrica {
    constructor(public lado: number) {
      super('Triángulo Equilátero');
    }
    calcularPerimetro(): number {
      return this.lado * 3;
    }
  }