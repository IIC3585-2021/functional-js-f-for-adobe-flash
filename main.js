const recursive_game = (info_function, score_calculator, turn_comparison) => (players_array) => {
  if ((players_array.filter((x) => x[1] === 0)).length) {
    console.log(`El jugador ${winners[0][0]} ha ganado la competencia!!!!`)
    return;
  }
  if (!((players_array.filter(turn_comparison(players_array[0][2]))).length)) {
    console.log(`Ingrese lanzamientos de ${players_array[0][0]}:\n`)
    const lanzamientos = [20,20,20]; //Pedir input
    players_array[0][1] = score_calculator(players_array[0][1], lanzamientos);

    console.log(`El nuevo puntaje de ${players_array[0][0]} es: ${players_array[0][1]}\n`)
    recursive_game(info_function, score_calculator)(players_array) //arreglar con Y
  }
  else {
    console.log(`Ingrese lanzamientos de ${not_played[0][0]}:\n`)
    const lanzamientos = [20,20,20]; //Pedir input
    players_array[players_array.indexOf(not_played[0])][1] = score_calculator(players_array[players_array.indexOf(not_played[0])][1], lanzamientos);

    console.log(`El nuevo puntaje de ${not_played[0][0]} es: ${not_played[0][1]}\n`)
    recursive_game(info_function, score_calculator)(players_array) //arreglar con Y
  }
};


const play_game = (...players_names) => {
  build_matrix(players_names)
  console.log('Juego inicializado con jugadores ',players_names.slice(0,-1).toString(), )
  
};