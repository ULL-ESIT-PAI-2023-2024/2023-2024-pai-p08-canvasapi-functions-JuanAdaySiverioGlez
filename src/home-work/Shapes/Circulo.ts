/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc A class that represents a circle.
 */

import { Figura } from './Shape.js';
import { MyElement } from '../Element/MyElement.js';

export class Circulo extends MyElement implements Figura {
  private radio: number; // Radio Circunferencia
  
  /**
   * Constructor de la clase Cuadrado.
   * @param coordenadaX Coordenada X del vértice superior izquierdo del cuadrado.
   * @param coordenadaY Coordenada Y del vértice superior izquierdo del cuadrado.
   * @param lado Longitud del lado del cuadrado.
   * @param color Color del cuadrado.
   */
  constructor(coordenadaX: number, coordenadaY: number, radio: number, color: string) {
    super(color, [coordenadaX, coordenadaY]); // Call the constructor of the parent class
    this.radio = radio; // Inicializa la distancia del radio
  }

  /**
   * Método para calcular el área del cuadrado.
   * @returns El área del cuadrado.
   */
  public calcularArea(): number {
    const PI: number = 3.14;
    return 2 * PI * this.radio; // Retorna el área del cuadrado
  }

  /**
   * Método para calcular el punto medio
   * @returns El punto medio de la forma [coordX, coordY]
   */
  public calcularPuntoMedio(): number[] {
    return [this.centroide[0], this.centroide[1]];
  }

  /**
   * Método para dibujar el cuadrado en un contexto de dibujo 2D.
   * @param contexto Contexto de dibujo 2D en el que se dibujará el cuadrado.
   */
  public draw(contexto: CanvasRenderingContext2D): void {
    contexto.fillStyle = this.color; // Establece el color de relleno del contexto de dibujo
    contexto.arc(this.centroide[0], this.centroide[1], this.radio, 0, 2 * Math.PI);
    contexto.fillStyle = this.color; // Establecer el color de relleno
    contexto.fill(); // Rellenar el círculo con el color especificado
  }
}
