const recursive_game = (players_array) => {
  const winners = players_array.filter((x) => x[1] === 0)
  if (winners.length) {
    console.log(`El jugador ${winners[0][0]} ha ganado la competencia!!!!`)
    return;
  }
};
