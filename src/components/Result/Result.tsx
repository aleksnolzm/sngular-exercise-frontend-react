import { ResultProps } from '../../types/result';

/**
 * Componente generado para mostrar el valor final del calculo del ejercicio
 */
const Result = ({ total, style, className, ...props }: ResultProps): JSX.Element => {
  return (
    <div className={`card ${className || ''}`} style={{ width: '18rem', height: '10rem', ...style }} {...props}>
      <div className="card-body">
        <h5 className="card-title text-center">Resultado total de calculo</h5>
        <p className="card-text text-center" style={{ fontSize: '3.8rem' }}>{total}</p>
      </div>
    </div>
  )
}

export default Result;
