/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc A class that represents a Line.
 */

import { Figura } from './Shape.js';
import { MyElement } from '../Element/MyElement.js';

export class Line extends MyElement implements Figura {
  private initCoordenadaX: number; // Coordenada X del vértice superior izquierdo del linea
  private initCoordenadaY: number; // Coordenada Y del vértice superior izquierdo del linea
  private endCoordenadaX: number; // Coordenada X del vértice superior izquierdo del linea
  private endCoordenadaY: number; // Coordenada Y del vértice superior izquierdo del linea  
  private grosor: number; // Grosor del linea
  private discontinua: boolean; // Grosor del linea
  /**
   * Constructor de la clase linea.
   * @param coordenadaX Coordenada X del vértice superior izquierdo del linea.
   * @param coordenadaY Coordenada Y del vértice superior izquierdo del linea.
   * @param lado Longitud del lado del linea.
   * @param color Color del linea.
   */
  constructor(initCoordenadaX: number, 
              initCoordenadaY: number, 
              endCoordenadaX: number, 
              endCoordenadaY: number, 
              color: string,
              grosor: number = 1,
              discontinua: boolean = false) {
    super(color);
    this.initCoordenadaX = initCoordenadaX; // Inicializa la coordenada X del vértice superior izquierdo del linea
    this.initCoordenadaY = initCoordenadaY; // Inicializa la coordenada Y del vértice superior izquierdo del linea
    this.endCoordenadaX = endCoordenadaX;
    this.endCoordenadaY = endCoordenadaY;
    this.centroide = this.calcularPuntoMedio();
    this.grosor = grosor;
    this.discontinua = discontinua;
  }

  /**
   * Método para calcular el área del linea.
   * @returns El área del linea.
   */
  public calcularArea(): number {
    return 0; // Retorna el área del linea que es nula
  }

  /**
   * Método para calcular el punto medio
   * @returns El punto medio de la forma [coordX, coordY]
   */
  public calcularPuntoMedio(): number[] {
    // Creacion punto medio
    const puntoMedioX: number = (this.initCoordenadaX + this.endCoordenadaX) / 2;
    const puntoMedioY: number = (this.initCoordenadaY + this.endCoordenadaY) / 2;
    return [puntoMedioX, puntoMedioY];
  }

  /**
   * Método para dibujar el linea en un contexto de dibujo 2D.
   * @param contexto Contexto de dibujo 2D en el que se dibujará el linea.
   */
  public draw(contexto: CanvasRenderingContext2D): void {
    // Establecer el ancho del borde de la línea
    contexto.lineWidth = this.grosor; // Por ejemplo, un ancho de 5 píxeles
    contexto.strokeStyle = this.color; // Establecer el color de la línea
    contexto.beginPath(); // Comenzar un nuevo trazado
    contexto.moveTo(this.initCoordenadaX, this.initCoordenadaY); // Mover al punto inicial
    if (this.discontinua) contexto.setLineDash([5, 15]);
    contexto.lineTo(this.endCoordenadaX, this.endCoordenadaY); // Dibujar la línea al punto final
    contexto.stroke(); // Dibujar la línea
    contexto.setLineDash([]);
  }
}