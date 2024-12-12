export default class Generator {
  constructor () {
    // TODO
  }

  private getFibonacci(current: number): number {
    if (current <= 1) return current;
    const result = this.getFibonacci(current - 2) + this.getFibonacci(current - 1);
    return result;
  }

  private getPrimeNumber(indexOfNumber: number){

  }

  private getTriangular(current: number): number {
    const calculated = (current*(current + 1))/2
    return calculated;
  };

  public calculate(): number {
    // TODO
    return 2;
  }

}