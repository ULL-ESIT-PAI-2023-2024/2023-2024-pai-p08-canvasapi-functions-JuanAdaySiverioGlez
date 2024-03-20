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

import { MyElement } from '../Element/MyElement.js';

export class Text extends MyElement {
  private text: string; // Radio Circunferencia
  private font_size: number;

  constructor(coordX: number, coordY: number, text: string, font_size: number, color: string) {
    super(color, [coordX, coordY]); // Call the constructor of the parent class
    this.text = text;
    this.font_size = font_size;
  }

  /**
   * Método para dibujar el cuadrado en un contexto de dibujo 2D.
   * @param contexto Contexto de dibujo 2D en el que se dibujará el cuadrado.
   */
  public draw(contexto: CanvasRenderingContext2D): void {
    contexto.font = this.font_size + 'px Arial'; // Define el tamaño y la fuente del texto
    contexto.fillStyle = this.color; // Define el color del texto
    contexto.fillText(this.text, this.centroide[0], this.centroide[1]);
  }
}
