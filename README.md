# Bienvenido!

Repositorio del grupo 6 para la tarea 1 del ramo Diseño avanzado de aplicaciones web.

## Integrantes:
- Diego Echeverría
- Ignacio Peñafiel
- Felipe Valenzuela

# ---------

Aproximación al problema:

Lo primero a pensar en este problema son los siguientes puntos:

- Se requiere guardar puntaje de cada jugador
- Se requiere guardar la asociación que puntaje esta relacionado a que jugador
- Se requiere guardar los jugadores
- Se requiere guardar el orden de los jugadores

### Solución

- Se guardara en un array de arrays la información del juego, cada array tendrá dos elementos, en la primera posición será un string con el nombre del jugador y en la segunda posición el puntaje asociado a dicha persona.

#### Ejemplo

```
[['Jaime', 334], ['Ema', 376]]
```

De manera inicial, se creara la funcion que creará la matriz de jugadores, la que almacenará los puntajes obtenidos a lo largo del juego:

```
function buildMatrix(players: ArrayOfString): Matrix_player
```

Esta toma un arreglo de strings con los nombres de jugadores y entrega el output de la matriz mencionada anteriormente, con sus puntajes iniciales. Adicionalmente se agregará un tercer valor hacer uso de quién es el turno.

#### Ejemplo

```
>> buildMatrix(['Jaime', 'Ema'])
<- [['Jaime', 501, 0], ['Ema', 501, 0]]
```

Para ingresar el input de los string en un array, solo basta con un ´´´rest operator´´´.


#### Ejemplo

```
function play_game(...names_players) {

    // code of simulation

    return 'finish game';
  }
```

Para el manejo del juego, y para seguir el paradigma funcional, ocupamos