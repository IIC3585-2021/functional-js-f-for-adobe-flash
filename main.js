const fs = require('fs');

const read_plays = (path) => {
  let data = fs.readFileSync('input.txt', 'utf8');
  let plays = data.toString().split('\n');
  return plays
};

const get_score = (throws) => {
  if (throws === 'DB') {
    return 50;
  }
  else if (throws === 'SB') {
    return 25;
  }
  else if (throws === null) {
    return 0;
  }
  else if (Number.isInteger(throws)) {
    return throws;
  }
  else {
    return throws.reduce((x,y) => (parseInt(x)*parseInt(y)));
  }
};

const total_throw_score = (score_function) => (score, throws) => {
  let throw_score = throws.reduce((x, y) => (score_function(x) + score_function(y)));
  return Math.abs(score - throw_score);
}

const new_score = total_throw_score(get_score);


const initial_score = (name) => {
    return [name, 501, 0];
}

const build_matrix = (initial_function) => (players_array) => {
    return players_array.map(initial_function);
}

const get_info = build_matrix(initial_score);

const compare_turns = (original_turn) => (to_compare) => (original_turn !== to_compare[2]);


//Intentamos pedir input en la consola mientras se corría el programa, pero no lo logramos, ya que al trabajar con recursión
//y async al mismo tiempo, suceden cosas raras

// const readline = require('readline');

// const rl = readline.createInterface(process.stdin, process.stdout);

// exports.question = function(q){

//   let response;

//   rl.setPrompt(q);
//   rl.prompt();
//   return new Promise(( resolve , reject) => {

//     rl.on('line', (userInput) => {
//         response = userInput;
//         rl.close();
//     });

//     rl.on('close', () => {
//         resolve(response);
//     });

//   });
// }

// const get_input = exports.question;

const parse_tuple = (tup) => {
  return tup.slice(1,-1).split(",").map(x => parseInt(x))
}

const parse_array = (tuple_parser) => (array_str) => {
  let aux = array_str.slice(1,-1).split(", ")
  return aux.map(x => {
    if (x[0] === "[") {
      return tuple_parser(x)
    } else {
      return x.slice(1,-1)
    }
  })
}

const parse_throw_array = parse_array(parse_tuple);

const Y = f => (x => x(x))(x => f(y => x(x)(y)))


const recursive_game = (score_calculator, turn_comparison, parse_function) => (recursive_func) => (players_array) => {
  const winners = players_array.filter((x) => x[1] === 1);
  if (winners.length) {
    console.log(`El jugador ${winners[0][0]} ha ganado la competencia!!!!`)
    return;
  }
  const not_played = players_array.filter(turn_comparison(players_array[0][2]));
  // Turno del primero
  if (!(not_played.length)) {
    const n_l = "['SB', [2,20], [3,20]]";
    const lanzamientos = parse_function(n_l);
    players_array[0][2] += 1
    players_array[0][1] = score_calculator(players_array[0][1], lanzamientos);

    console.log(`El nuevo puntaje de ${players_array[0][0]} es: ${players_array[0][1]}\n`)
    recursive_func(players_array) //arreglar con Y
  }
  // Turno de otro
  else {
    const n_l = "['SB', [2,20], [3,20]]";
    const lanzamientos = parse_function(n_l);
    const player_index = players_array.indexOf(not_played[0]);
    players_array[player_index][2] += 1;
    players_array[player_index][1] = score_calculator(players_array[player_index][1], lanzamientos);

    console.log(`El nuevo puntaje de ${not_played[0][0]} es: ${players_array[player_index][1]}\n`)
    recursive_func(players_array) //arreglar con Y
  }
};


// const n_p = await get_input("Ingrese los nombres de los jugadores separados por coma:\n");
// const players = n_p.split(",");

const players = ["Ema", "Jaime"];

const announce = 'Juego inicializado con jugadores';

console.log('Juego inicializado con jugadores', players.slice(0,-1).toString(), 'y', players.slice(-1).toString())

const players_array = get_info(players);
Y(recursive_game(new_score, compare_turns, parse_throw_array))(players_array);

// console.log('despues del recursive game')
// Juego inicializado con jugadores Jaime y  Ema.  Ingrese lanzamientos de Jaime
// ['SB', [2,20], [3,20]]
// Jaime queda con 334 puntos. Ingrese lanzamientos de Ema
// ['SB', [2,20], [3,20]]
// Ema queda con 376 puntos. Ingrese lanzamientos de Jaime

// anitalavalatina