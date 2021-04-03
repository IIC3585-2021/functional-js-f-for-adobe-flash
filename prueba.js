const readline = require('readline');

const question = async () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log("LLEGUE 1");
    rl.question('What do you think of Node.js? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.close();
        console.log("LLEGUE 3");
        return "RETORNO====="

      // aux = answer;
    });
    console.log("LLEGUE R");
    return "RETURN";
}


let aux = question();

console.log(aux);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

