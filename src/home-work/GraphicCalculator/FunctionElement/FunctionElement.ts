/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Juan Aday Siverio González
 * @since 17/03/2024
 * @desc A class that represents a GraphicCalculator
 */

import { MyElement } from "../../Element/MyElement.js";

export class FunctionElement extends MyElement {
  private ecuacion: string;
  private borderFunction: number;

  constructor(ecuacion: string, colorGrid: string, borderFunction: number = 2) {
    super(colorGrid);
    this.borderFunction = borderFunction;
    this.ecuacion = ecuacion;
  }

  public evaluateFunction(xInput: number): number { // Para sin(x)
    switch (this.ecuacion) {
      case 'sin(x)':
        return Math.sin(xInput);
      case 'cos(x)':
        return Math.cos(xInput);
      case 'tan(x)':
        return Math.tan(xInput);
      case '5^x':
        return Math.pow(5, xInput);
      default:
        return 0;
    }
  }

  public draw(contexto: CanvasRenderingContext2D): void { 
    const canvas: HTMLCanvasElement = contexto.canvas;
    const scaleX: number = canvas.width / 2 / 10;
    const scaleY: number = canvas.height / 2 / 10;

    contexto.beginPath();
    contexto.strokeStyle = this.color;
    contexto.lineWidth = this.borderFunction;
    for (let pixelX = 0; pixelX < canvas.width; pixelX++) {
      const x = (pixelX - canvas.width / 2) / scaleX;
      const y = -this.evaluateFunction(x) * scaleY + canvas.height / 2;
      if (pixelX === 0) {
        contexto.moveTo(pixelX, y);
      } else {
        contexto.lineTo(pixelX, y);
      }
    }
    contexto.stroke();
  }    
}
