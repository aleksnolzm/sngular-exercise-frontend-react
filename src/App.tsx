import { useState } from 'react';
import { Form, Result } from './components';
import { useSeries } from './hooks';

const App = () => {
  const [testNumber, setTestNumber] = useState<number | undefined>();

  const { calculate } = useSeries();

  const handleOnCalculate = (currentVal: number) => {
    const result = calculate(currentVal);
    console.log(result);
    setTestNumber(result);
  };

  return (
    <div className="bg-dark w-100 vh-100">
      <div className="container w-100 h-100 d-flex flex-column align-items-center">
        <div className="p-4 mt-2">
          <h1 className="text-white text-center">Formulario para calcular serie</h1>
        </div>
        <Form onChange={handleOnCalculate} />
        {testNumber !== undefined && (
          <Result className="mt-4" total={testNumber} />
        )}
      </div>
    
    </div>
  )
}

export default App
