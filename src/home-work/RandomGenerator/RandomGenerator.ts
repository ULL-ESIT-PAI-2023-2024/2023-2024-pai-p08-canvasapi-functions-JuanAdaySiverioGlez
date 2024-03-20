/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc The main File
 */

// Importar las clases y la interfaz necesarias

export class RandomGenerator {
  private maxWidth: number; // Ancho máximo del canvas
  private maxHeight: number; // Alto máximo del canvas
  private minWidth: number; // Ancho mínimo del canvas
  private minHeight: number; // Alto mínimo del canvas

  constructor (maxWidth: number, maxHeight: number, minWidth: number = 0, minHeight: number = 0) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.minWidth = minWidth;
    this.minHeight = minHeight;
  }

  /**
   * Genrate Random Coord
   * @param maxWidth The max width
   * @param maxHeight The max height
   * @returns A random Bi-Dimensional Coord
   */
  public generateRandomCoord(maxWidth: number = this.maxWidth, maxHeight: number = this.maxHeight) : number[] {
    return [this.generateRandomNumber(this.minWidth, maxWidth), this.generateRandomNumber(this.minHeight, maxHeight)];
  }

  // Función para generar un número aleatorio dentro de un rango dado
  public generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}