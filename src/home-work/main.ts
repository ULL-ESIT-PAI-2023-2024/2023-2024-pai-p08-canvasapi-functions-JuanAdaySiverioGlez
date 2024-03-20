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
//import { RandomGenerator } from "./RandomGenerator/RandomGenerator";

import { FunctionElement } from "./GraphicCalculator/FunctionElement/FunctionElement.js";
import { GraphicCalculator } from "./GraphicCalculator/GraphicCalculator.js";
import { View } from "./Shapes/View.js";
import { MyElement } from "./Element/MyElement.js";
//import { FunctionElement } from "./GraphicCalculator/FunctionElement/FunctionElement.js";
/*
function ActualizarFuncionNueva(contexto: CanvasRenderingContext2D, ecuation: string): void {
  const functElement: FunctionElement = new FunctionElement(ecuation, 'black');
  functElement.draw(contexto);
}*/

function main () {
  // Obtener el elemento del canvas del documento HTML
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  // Obtener el contexto de dibujo 2D del canvas
  const contexto: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
  // Verificar si se pudo obtener el contexto de dibujo
  if (contexto === null) { 
    alert('No se pudo obtener el contexto'); 
  }
  
 // Mover el punto de origen del contexto de dibujo 2D al centro del canvas
  
  const allView: View = new View(contexto);

  let graphicCalc: GraphicCalculator = new GraphicCalculator('black');
  graphicCalc.addFunction(new FunctionElement('sin(x)', 'green', 5));
  graphicCalc.addFunction(new FunctionElement('cos(x)', 'red', 5));
  graphicCalc.addFunction(new FunctionElement('exp(x)', 'blue', 5));
  graphicCalc.addFunction(new FunctionElement('sqrt(x)', 'yellow', 5));
  graphicCalc.addFunction(new FunctionElement('tan(x)', 'pink', 5));

  const allElements: MyElement[] = [graphicCalc];

  allView.dibujar(allElements);
}

main()