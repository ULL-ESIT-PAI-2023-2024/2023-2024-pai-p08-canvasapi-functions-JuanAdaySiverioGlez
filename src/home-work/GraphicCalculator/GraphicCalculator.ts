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

import { MyElement } from "../Element/MyElement.js"
import { FunctionElement } from "./FunctionElement/FunctionElement.js"
import { Text } from "../Shapes/Text.js";

export class GraphicCalculator extends MyElement {
  private allFunctions: FunctionElement[] = [];
  private cellSize: number = 75;

  constructor(colorGrid: string) {
    super(colorGrid);
    this.allFunctions = [];
  }

  public addFunction(ecuation: FunctionElement): void {
    this.allFunctions.push(ecuation);
  }

  private createGrid(contexto: CanvasRenderingContext2D): void {
    contexto.setLineDash([5, 15])
    for (let coordX = contexto.canvas.width / 2; coordX <= contexto.canvas.width; coordX += this.cellSize) {
      contexto.beginPath();
      contexto.strokeStyle = 'lightgrey';
      contexto.lineWidth = 2;
      contexto.moveTo(coordX, 0);
      contexto.lineTo(coordX, contexto.canvas.height);
      contexto.moveTo(contexto.canvas.width - coordX, 0);
      contexto.lineTo(contexto.canvas.width - coordX, contexto.canvas.height);
      contexto.stroke();
    }
    for (let coordY = contexto.canvas.height / 2; coordY <= contexto.canvas.height; coordY += this.cellSize) {
      contexto.beginPath();
      contexto.strokeStyle = 'lightgrey';
      contexto.lineWidth = 2;
      contexto.moveTo(0, coordY);
      contexto.lineTo(contexto.canvas.width, coordY);
      contexto.moveTo(0, contexto.canvas.height - coordY);
      contexto.lineTo(contexto.canvas.width, contexto.canvas.height - coordY);
      contexto.stroke();
    }
    contexto.setLineDash([])
  }

  private createAxis(contexto: CanvasRenderingContext2D): void {
    const canvas: HTMLCanvasElement = contexto.canvas;
    contexto.beginPath();
    contexto.strokeStyle = 'black';
    contexto.lineWidth = 2;
    contexto.moveTo(canvas.width / 2, 0);
    contexto.lineTo(canvas.width / 2, canvas.height);
    contexto.moveTo(0, canvas.height / 2);
    contexto.lineTo(canvas.width, canvas.height / 2);
    contexto.stroke();

    let iter: number = 2; 
    new Text(contexto.canvas.width / 2 - 5, canvas.height / 2 + 15, "0", 10, this.color).draw(contexto);
    for (let coordX = (contexto.canvas.width / 2) + this.cellSize; coordX <= contexto.canvas.width; coordX += this.cellSize) {
      contexto.beginPath();
      new Text(coordX - 5, canvas.height / 2 + 15, iter.toString(), 10, this.color).draw(contexto);
      new Text(contexto.canvas.width - coordX - 5, canvas.height / 2 + 15, (-iter).toString(), 10, this.color).draw(contexto);
      iter += 2;
    }
    iter = 2; 
    for (let coordY = (contexto.canvas.height / 2) + this.cellSize; coordY <= contexto.canvas.height; coordY += this.cellSize) {
      contexto.beginPath();
      new Text(contexto.canvas.width / 2 - 10, (((contexto.canvas.height / 2) - coordY) + (contexto.canvas.height / 2)), iter.toString(), 10, 'black').draw(contexto);
      new Text(contexto.canvas.width / 2 - 10, coordY, (-iter).toString(), 10, this.color).draw(contexto);
      iter += 2;
    }
  }

  public draw(contexto: CanvasRenderingContext2D): void {
    this.createGrid(contexto);
    this.createAxis(contexto);
    this.drawAllFunctions(contexto);
  }

  public drawAllFunctions(contexto: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.allFunctions.length; i++) {
      this.drawFunction(contexto, this.allFunctions[i]);
    }
  }

  public drawFunction(contexto: CanvasRenderingContext2D, ecuation: FunctionElement): void {
    ecuation.draw(contexto);
  }
}