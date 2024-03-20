/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc A class that represent Triangles
 */

import { Figura } from './Shape.js';
import { MyElement } from '../Element/MyElement.js';

export class Triangulo extends MyElement implements Figura {
  private base: number; // Longitud de la base del triángulo
  private altura: number; // Altura del triángulo

  /**
   * Constructor de la clase Triangulo.
   * @param coordenadaX Coordenada X del vértice superior izquierdo del triángulo.
   * @param coordenadaY Coordenada Y del vértice superior izquierdo del triángulo.
   * @param base Longitud de la base del triángulo.
   * @param altura Altura del triángulo.
   * @param color Color del triángulo.
   */
  constructor(coordenadaX: number, coordenadaY: number, base: number, altura: number, color: string) {
    super(color, [coordenadaX, coordenadaY]); // Call the constructor of the parent class (Element.js
    this.base = base; // Inicializa la longitud de la base del triángulo
    this.altura = altura; // Inicializa la altura del triángulo
  }

  /**
   * Método para calcular el área del triángulo.
   * @returns El área del triángulo.
   */
  public calcularArea(): number {
    return (this.base * this.altura) / 2; // Retorna el área del triángulo
  }

    /**
   * Método para calcular el punto medio
   * @returns El punto medio de la forma [coordX, coordY]
   */
  public calcularPuntoMedio(): number[] {
    return [this.centroide[0] + (this.base / 2), this.centroide[1] + (this.altura / 2)]
  }

  /**
   * Método para dibujar el triángulo en un contexto de dibujo 2D.
   * @param contexto Contexto de dibujo 2D en el que se dibujará el triángulo.
   */
  public draw(contexto: CanvasRenderingContext2D): void {
    contexto.fillStyle = this.color; // Establece el color de relleno del contexto de dibujo
    contexto.beginPath(); // Inicia un nuevo trazado de camino
    contexto.moveTo(this.centroide[0], this.centroide[1]); // Establece el punto de inicio del trazado
    contexto.lineTo(this.centroide[0] + this.base, this.centroide[1]); // Dibuja una línea desde el punto de inicio hasta el vértice derecho
    contexto.lineTo(this.centroide[0] + (this.base / 2), this.centroide[1] + this.altura); // Dibuja una línea desde el vértice derecho hasta la base del triángulo
    contexto.closePath(); // Cierra el trazado de camino
    contexto.fill(); // Rellena el triángulo con el color especificado
  }
}
