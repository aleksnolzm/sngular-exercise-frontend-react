import { describe, it, expect } from 'vitest';
import Generator from './generator';

/**
 * Archivo de test de ejercicio con casos
 * numeros naturales del 1 al 10
 * 
 * Series =>
 * triangular =>  [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
 * primos     =>  [2, 3, 5, 7,  11, 13, 17, 19, 23, 29]
 * fibonacci  =>  [0, 1, 1, 2,  3,  5,  8,  13, 21, 34]
 * 
 * Formula:  serie(n) = 2triangular(n + 1) - 2primo(n) + fibonacci(n + 1);
 * total      =>  [3,7,12,19,25,38,51,73,98,129]
 */

describe('Testing de ejercicio para sumatoria de series', () => {
  const serial = new Generator();

  it('Caso con n = 1', () => {
    const result = serial.calculate(1);
    expect(result).toBe(3);
  });

  it('Caso con n = 2', () => {
    const result = serial.calculate(2);
    expect(result).toBe(7);
  });

  it('Caso con n = 3', () => {
    const result = serial.calculate(3);
    expect(result).toBe(12);
  });

  it('Caso con n = 4', () => {
    const result = serial.calculate(4);
    expect(result).toBe(19);
  });

  it('Caso con n = 5', () => {
    const result = serial.calculate(5);
    expect(result).toBe(25);
  });

  it('Caso con n = 6', () => {
    const result = serial.calculate(6);
    expect(result).toBe(38);
  });

  it('Caso con n = 7', () => {
    const result = serial.calculate(7);
    expect(result).toBe(51);
  });

  it('Caso con n = 8', () => {
    const result = serial.calculate(8);
    expect(result).toBe(73);
  });

  it('Caso con n = 9', () => {
    const result = serial.calculate(9);
    expect(result).toBe(98);
  });

  it('Caso con n = 10', () => {
    const result = serial.calculate(10);
    expect(result).toBe(129);
  });

})