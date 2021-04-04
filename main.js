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
  else {
    return throws.reduce((x,y) => (x*y));
  }
};

const total_throw_score = (score_function) => (score, throws) => {
  let throw_score = throws.reduce((x, y) => (x + score_function(y)));
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

const compare_turns = (original_turn) => (to_compare) => (first_turn !== to_compare)


const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

exports.question = function(q){

  let response;

  rl.setPrompt(q);
  rl.prompt();
  return new Promise(( resolve , reject) => {

    rl.on('line', (userInput) => {
        response = userInput;
        rl.close();
    });

    rl.on('close', () => {
        resolve(response);
    });

  });
}

const get_input = exports.question;

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


const recursive_game = (score_calculator, turn_comparison, input_function, parse_function) => async (players_array) => {
  if ((players_array.filter((x) => x[1] === 0)).length) {
    console.log(`El jugador ${winners[0][0]} ha gclearanado la competencia!!!!`)
    return;
  }
  if (!((players_array.filter(turn_comparison(players_array[0][2]))).length)) {
    const n_l = await input_function(`Ingrese lanzamientos de ${players_array[0][0]}:\n`);
    const lanzamientos = parse_function(n_l);
    players_array[0][1] = score_calculator(players_array[0][1], lanzamientos);

    console.log(`El nuevo puntaje de ${players_array[0][0]} es: ${players_array[0][1]}\n`)
    recursive_game(score_calculator, turn_comparison, input_function)(players_array) //arreglar con Y
  }
  else {
    const n_l = await input_function(`Ingrese lanzamientos de ${not_played[0][0]}:\n`);
    const lanzamientos = parse_function(n_l);
    players_array[players_array.indexOf(not_played[0])][1] = score_calculator(players_array[players_array.indexOf(not_played[0])][1], lanzamientos);

    console.log(`El nuevo puntaje de ${not_played[0][0]} es: ${not_played[0][1]}\n`)
    recursive_game(score_calculator, turn_comparison, input_function)(players_array) //arreglar con Y
  }
};


// const n_p = await get_input("Ingrese los nombres de los jugadores separados por coma:\n");
// const players = n_p.split(",");

const players = ["Ema", "Jaime"];

const announce = 'Juego inicializado con jugadores';

console.log('Juego inicializado con jugadores', players.slice(0,-1).toString(), 'y', players.slice(-1).toString())

const players_array = get_info(players);
recursive_game(new_score, compare_turns, get_input, parse_throw_array)(players_array);


// Juego inicializado con jugadores Jaime y  Ema.  Ingrese lanzamientos de Jaime
// ['DB', [3,20], [3,19]]
// Jaime queda con 334 puntos. Ingrese lanzamientos de Ema
// ['SB', [2,20], [3,20]]
// Ema queda con 376 puntos. Ingrese lanzamientos de Jaime

// anitalavalatina