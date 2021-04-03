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
    return throw.reduce((x,y) => x*y)
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



function* infinite(array_player) {
    let index = 0;

    while (true) {
    	array_player[index][1] -= 1 // esto se cambia a quitar puntaje
    	if(array_player[index][1] === 0){
    		console.log('Gano ', array_player[index][0])
    		return
    	}
    	console.log(array_player[index])
        yield index++;
        if (index === array_player.length) {index = 0;}
    }
}




