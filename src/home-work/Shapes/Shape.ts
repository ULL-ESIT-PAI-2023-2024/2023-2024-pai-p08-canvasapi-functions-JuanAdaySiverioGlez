/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc An interface that represents a shape. 
 */

export interface Figura {
  /**
   * Método para calcular el área de la figura.
   * @returns El área de la figura.
   */
  calcularArea(): number;

  /**
   * Método para calcular el punto medio
   * @returns El punto medio de la forma [coordX, coordY]
   */
  calcularPuntoMedio(): number[];
}
