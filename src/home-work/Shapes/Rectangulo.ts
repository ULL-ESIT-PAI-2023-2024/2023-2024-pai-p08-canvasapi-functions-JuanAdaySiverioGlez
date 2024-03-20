/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc A class that represents a rectangule.
 */
import { Figura } from './Shape.js';
import { MyElement } from '../Element/MyElement.js';

export class Rectangulo extends MyElement implements Figura {
  private base: number; // Longitud de la base del rectángulo
  private altura: number; // Altura del rectángulo

  /**
   * Constructor de la clase Rectangulo.
   * @param coordenadaX Coordenada X del vértice superior izquierdo del rectángulo.
   * @param coordenadaY Coordenada Y del vértice superior izquierdo del rectángulo.
   * @param base Longitud de la base del rectángulo.
   * @param altura Altura del rectángulo.
   * @param color Color del rectángulo.
   */
  constructor(coordenadaX: number, coordenadaY: number, base: number, altura: number, color: string) {
    super(color, [coordenadaX, coordenadaY]); // Call the constructor of the parent class (Element.js
    this.base = base; // Inicializa la longitud de la base del rectángulo
    this.altura = altura; // Inicializa la altura del rectángulo
  }
  
  /**
   * Método para calcular el área del rectángulo.
   * @returns El área del rectángulo.
   */
  public calcularArea(): number {
    return this.base * this.altura; // Retorna el área del rectángulo
  }

  /**
   * Método para calcular el punto medio
   * @returns El punto medio de la forma [coordX, coordY]
   */
  public calcularPuntoMedio(): number[] {
    return [this.centroide[0] + (this.base / 2), this.centroide[1] + (this.altura / 2)]
  }

  /**
   * Método para dibujar el rectángulo en un contexto de dibujo 2D.
   * @param contexto Contexto de dibujo 2D en el que se dibujará el rectángulo.
   */
  public draw(contexto: CanvasRenderingContext2D): void {
    contexto.fillStyle = this.color; // Establece el color de relleno del contexto de dibujo
    contexto.fillRect(this.centroide[0], this.centroide[1], this.base, this.altura); // Dibuja un rectángulo relleno en el contexto de dibujo
  }
}
