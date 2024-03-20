/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc An abstract calss that represents an Element.
 * The principle Idea is that all elements have a centroid and a color.
 * And a method to draw the element.
 */

export abstract class MyElement {
  protected centroide: number[]; // El centroide de la figura
  protected color: string; // Color del elemento

  /**
   * Constructor de la clase Element.
   * @param color Color del elemento.
   */
  constructor(color: string = 'black', centroide: number[] = [0, 0]) {
    this.color = color; // Inicializa el color del elemento
    this.centroide = centroide; // Inicializa el centroide del elemento
  }

  /**
   * Método para dibujar el elemento en un contexto de dibujo 2D.
   * @param contexto Contexto de dibujo 2D en el que se dibujará el elemento.
   */
  abstract draw(contexto: CanvasRenderingContext2D): void;

  /**
   * Método para calcular el punto medio
   * @returns El punto medio de la forma [coordX, coordY]
   */
  public getMidPoint(): number[] {
    return this.centroide;
  }

  /**
   * Método para obtener el color del elemento.
   * @returns El color del elemento.
   */
  public getColor(): string {
    return this.color;
  }
}