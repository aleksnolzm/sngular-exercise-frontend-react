/**
 * Clase que contiene los metodos necesarios para realizar el ejercicio
 * cuenta con 4 metodos privados y uno publico para externar el resultado.
 */
export default class Generator {

  constructor () {
    // TODO: No hay parametros extra
  }

  // Validacion si un numero es primo o no
  private checkPrimeNumber(dividend: number): boolean {
    if (dividend < 2) return false;
    if (dividend === 2) return true;
    let accumulator: number = 0;
    for(let divisor = 1; divisor <= dividend; divisor++) {
      const quotient = dividend/divisor;
      if (quotient % 1 === 0) accumulator++;
    }
    return accumulator === 2;
  }

  // Realiza busqueda del numero en la serie fibonacci
  private getFibonacci(indexOfNumber: number): number {
    const accumulator: Array<number> = [0, 1];  
    for (let incremental = 0; incremental < indexOfNumber - 2; incremental++) {
      const summation = accumulator[incremental] + accumulator[incremental + 1];
      accumulator.push(summation);
    }
    return accumulator[indexOfNumber - 1];
  }

  // Realiza busqueda del numero en la serie numeros primos
  private getPrimeNumber(indexOfNumber: number): number {
    const primeCollection: Array<number> = new Array<number>();
    let iterator: number = 2;

   while(primeCollection.length < indexOfNumber) {
      const isPrime = this.checkPrimeNumber(iterator);
      if (isPrime) primeCollection.push(iterator);
      iterator++
    }
    return primeCollection[indexOfNumber - 1];
  }

  // Realiza calculo del numero triangular.
  private getTriangular(current: number): number {
    const calculated = (current*(current + 1))/2
    return calculated;
  };

  // Calculo total de items de series
  public calculate(numberForTest: number): number {
      if (numberForTest < 1) return 0;
      const triangular = this.getTriangular(numberForTest + 1); // triangular(n + 1)
      const prime = this.getPrimeNumber(numberForTest);         // primo(n)
      const fibonacci = this.getFibonacci(numberForTest + 1);   // fibonacci(n + 1)
      const result = 2*triangular - 2*prime + fibonacci;        // 2triangular - 2primo + fibonacci
      return result;
  }
}