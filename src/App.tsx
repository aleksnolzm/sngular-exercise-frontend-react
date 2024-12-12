import { useState } from 'react';

function App() {
  const [testNumber, setTestNumber] = useState<number>(0);
  
  return (
    <div className="bg-dark w-100 vh-100">
      <div className="container w-100 h-100 d-flex flex-column align-items-center">
        <div className="p-4 mt-2">
          <h1 className="text-white text-center">Formulario para calcular serie</h1>
        </div>
        <p className="text-white text-center">Ingrese un numero para calcular el resultado de la serie</p>
      </div>
    
    </div>
  )
}

export default App
