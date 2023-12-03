# Productor-Consumidor_JS
## Requerimientos

1. **Productor y Consumidor Únicos:**
   - Existe un solo productor y consumidor.

2. **Contenedor:**
   - Capacidad para 20 elementos.
   - Buffer circular y acotado: Al llegar a la casilla 20, comienza nuevamente en la casilla 1.

3. **Elementos del Producto:**
   - Pueden ser números, caracteres especiales, letras, etc.

4. **Operaciones Exclusivas:**
   - Solo puede ingresar uno a la vez al contenedor.

5. **Condiciones de Ingreso:**
   - Productor: Debe haber espacio en el contenedor.
   - Consumidor: Debe existir producto.

6. **Visualización en Pantalla:**
   a. Contenedor con espacios numerados.
   b. Información del Productor:
      - Estado: Dormido, trabajando, intentando ingresar, etc.
   c. Información del Consumidor:
      - Estado: Dormido, trabajando, intentando ingresar, etc.
   d. Mensajes indicando quién está trabajando, intentando trabajar o si está dormido.

7. **Manejo de Tiempos Aleatorios:**
   - Para dormir al productor y al consumidor.

8. **Producción/Consumo de Elementos:**
   - Al "despertar", intentarán producir y/o consumir según sus condiciones.
   - Pueden producir y/o consumir de 4 a 7 elementos en cada entrada.

9. **Orden de Entrada en Buffer:**
   - Productor: Colocará elementos en orden, comenzando por la primera casilla y continuando donde quedó.
   - Consumidor: Quitará elementos en orden, comenzando también por la primera casilla y continuando donde quedó la última entrada.

10. **Circulación en el Buffer:**
    - Al llegar a la casilla 20, irán de nuevo a la 1 y continuarán produciendo y/o consumiendo.

11. **Fin del Programa:**
    - Se presiona la tecla "ESC".
