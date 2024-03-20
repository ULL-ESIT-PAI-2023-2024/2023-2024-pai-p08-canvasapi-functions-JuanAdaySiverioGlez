/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc A class that represents a view. This class Print all objects in the canvas.
 */

import { MyElement } from '../Element/MyElement.js';

export class View {
  private static contexto: CanvasRenderingContext2D;
  /**
   * Constructor de la clase View.
   * @param contexto Contexto de dibujo 2D en el que se dibujarán las figuras.
   */
  constructor(contexto: CanvasRenderingContext2D) {
    View.contexto = contexto;
  }

  /**
   * Dibuja un conjunto de figuras en el contexto de dibujo 2D.
   * @param figuras - Array de figuras a dibujar.
   */
  public dibujar(elementos: MyElement[]): void {
    for (const element of elementos) {
      element.draw(View.contexto); // Dibuja cada figura en el contexto de dibujo 2D
    }
  }
}
