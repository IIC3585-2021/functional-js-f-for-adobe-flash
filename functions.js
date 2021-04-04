// import has from 'lodash/has';

const get_score = (throw) => {
  if (throw === 'DB') {
    return 50;
  }
  else if (throw === 'SB') {
    return 25;
  }
  else if (throw === null) {
    return 0;
  }
  else {
    return throw.reduce((x,y) => (x*y));
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
