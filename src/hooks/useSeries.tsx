import { useMemo } from 'react';
import Generator from '../services/generator';

/**
 * Componente sin vista (hook) para instanciar la clase que provee el metodo
 * para realizar la operacion correspondiente al ejercicio
 */
const useSeries = () => {
  const series = useMemo(() => new Generator(), []);

  const calculate = (currentNumber: number): number  => {
    return series.calculate(currentNumber);
  };

  return { calculate }
}

export default useSeries;
