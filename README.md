# Master the Coding Interview: Data Structures + Algorithms

- ¿Puede resolver un problema que tiene la empresa, el cliente o el empleador?

Si soy capaz de resolver sus problemas, entonces soy valioso y productivo para ellos

- ¿Cómo resolver problemas?

Debo tener un buen proceso de pensamiento y conocer las compensaciones entre las estructuras de datos y la complejidad del espacio
y el tiempo de los algoritmos

# Guía Rápida para Entrevistas de Programación

Basado en **Master The Coding Interview: Data Structures + Algorithms** de Andrei Neagoie.

---

## Los 3 pilares de un buen código:

1. **Legibilidad**
2. **Complejidad Temporal**
3. **Complejidad Espacial**

## Habilidades que busca el entrevistador:

- **Habilidades analíticas:** ¿Cómo analizas y resuelves problemas?
- **Habilidades de codificación:** ¿Escribes código limpio, simple, organizado y legible?
- **Conocimientos técnicos:** ¿Conoces los fundamentos del puesto al que aplicas?
- **Habilidades de comunicación:** ¿Tu personalidad encaja con la cultura de la empresa?

---

## Pasos para resolver un problema:

1. **Escucha atentamente:** Cuando el entrevistador plantea el problema, escribe los puntos clave (por ejemplo: "array ordenado"). Asegúrate de tener todos los detalles. Demuestra que eres organizado.
2. **Verifica:** ¿Cuáles son las entradas? ¿Cuáles son las salidas?
3. **Identifica el objetivo principal:** ¿Es importante optimizar tiempo, espacio o memoria? ¿Cuál es la meta principal?
4. **Haz preguntas con moderación:** No seas molesto haciendo demasiadas preguntas.
5. **Empieza con el enfoque ingenuo o fuerza bruta:** Describe la primera solución que se te ocurra (no necesitas escribir el código). Esto muestra que puedes pensar de manera crítica.
6. **Justifica por qué este enfoque no es el mejor:** Por ejemplo, menciona su complejidad O(n^2) o que no es legible.
7. **Analiza tu enfoque:** Comenta tu solución paso a paso y busca posibles fallos. ¿Hay repeticiones? ¿Cuellos de botella como O(N^2)? ¿Usaste toda la información proporcionada?
8. **Planifica antes de codificar:** Escribe los pasos que seguirás.
9. **Modulariza tu código desde el inicio:** Divide tu código en piezas pequeñas y claras. Agrega comentarios si es necesario.
10. **Empieza a codificar:** Mientras más preparado estés, mejor saldrá. Nunca empieces sin tener claro cómo proceder.
11. **Considera validaciones y casos erróneos:** Supón que alguien intentará romper tu código. Comprueba entradas falsas (por ejemplo: null, undefined, arrays vacíos). Escribe comentarios sobre los chequeos que harías.
12. **Usa nombres descriptivos:** Evita nombres confusos como `i` y `j`.
13. **Prueba tu código:** Considera casos como: sin parámetros, 0, undefined, null, arrays masivos, código asíncrono. Pregunta si puedes asumir ciertas condiciones.
14. **Propón mejoras:** Discute con el entrevistador cómo mejorarías el código: ¿Funciona? ¿Es legible? ¿Se puede optimizar? ¿Qué buscarías en Google para mejorar?
15. **Prepárate para preguntas adicionales:** Por ejemplo, ¿cómo manejarías entradas demasiado grandes para la memoria? La respuesta suele involucrar enfoques "divide y vencerás" o procesamiento distribuido.

---

## Lista de verificación para un buen código:

- [✅] **Funciona correctamente.**
- [✅] Uso adecuado de estructuras de datos.
- [✅] Reutilización de código / Evitar repeticiones.
- [✅] Modularidad: Código legible, mantenible y testeable.
- [✅] Complejidad menor a O(N^2). Evita bucles anidados cuando sea posible.
- [✅] Baja complejidad espacial. Evita desbordar la pila con recursiones o copiar arrays masivos.

---

## Heurísticas para destacar:

- [✅] **Hash Maps** suelen ser la respuesta para mejorar la complejidad temporal.
- [✅] Si es un array ordenado, utiliza **búsqueda binaria** para lograr O(log N). Divide y vencerás.
- [✅] Intenta ordenar la entrada.
- [✅] Usa tablas hash o información precomputada (por ejemplo, datos ya ordenados) para optimizar.
- [✅] Considera el equilibrio entre tiempo y espacio. A veces almacenar estado extra en memoria mejora el tiempo de ejecución.
- [✅] Sigue los consejos o pistas del entrevistador.
- [✅] Los trade-offs entre espacio y tiempo son comunes. Usar más espacio (como tablas hash) puede optimizar el tiempo.

---

## Recuerda:

**Comunica tu proceso de pensamiento tanto como sea posible.** No te preocupes por terminar rápido. Cada parte de la entrevista importa.
