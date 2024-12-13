import { useEffect, useState } from 'react';
import { FormProps } from '../../types/form';
import { validateNumber } from '../../utils/validators';

/**
 * Componente que contiene formulario para ingreso de numero 
 * de prueba y validacion necesaria para prevenir un error en el calculo
 * por valores NaN, null o undefined
 */

const Form = ({ onChange, ...props }: FormProps): JSX.Element => {

  const [numberString, setNumberString] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onChange !== undefined && numberString) onChange(Number(numberString));
  };

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNumberString(target.value);
    console.log(target.value);
    if (target.value.length < 1) {
      setError(undefined);
      return;
    }

    if (Number(target.value) < 1) {
      setError('El numero debe ser mayor o igual a 1');
      return;
    }

    const isNumber = validateNumber(target.value);
    if (!isNumber) {
      setError('No se aceptan letras ni numeros flotantes');
      return;
    }

    setError(undefined);
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-3" {...props}>
      <p className="text-white text-center">
        Ingrese un numero n del 1 al 10 para calcular las series correspondientes y su resultado total<br />
        <span className="fst-italic fs-5">serie(n) = 2triangular(n + 1) - 2primo(n) + fibonacci(n + 1)</span>
      </p>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="serieNumberTestInput" className="form-label text-white">
          Numero
        </label>
        <input
          type="number"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          id="serieNumberTestInput"
          placeholder="1, 2, 3... 10"
          onChange={handleInputChange}
          value={numberString}
        />
        {error !== undefined && (
          <div id="invalid-serieNumberTestInput" className="invalid-feedback pt-1">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-info mw-25 mt-3"
          disabled={numberString.length < 1 || error !== undefined}
        >
          Calcular
        </button>
      </form>
    </div>
  )
}

export default Form;
