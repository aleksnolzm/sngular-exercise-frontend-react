#### React + TypeScript + Vite
## Ejercicio de prueba con calculo de series.

Dadas las siguientes series númericas:
https://es.wikipedia.org/wiki/N%C3%BAmero_triangular
https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci
https://es.wikipedia.org/wiki/N%C3%BAmero_primo

Realizar pruebas unitarias usando los 10 números naturales como entrada (10 casos de prueba en total).

Desarrollar 3 componentes de React:
1.- un componente visual que muestra un formulario para introducir el número n
2.- un componente no-visual donde se calcule el término n de la serie
3.- un componente visual que muestra el resultado del cálculo

Desarrollar una clase con un método que entregue el término n de la serie:
 ```js
 serie(n) = 2triangular(n + 1) - 2primo(n) + fibonacci(n + 1);
```

##### Scripts:
Iniciar projecto: npm run dev
Testing: npm run test
