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
let aux = [];
const try2 = async () => {
  aux = await get_input("how old are you? ");
  console.log("AAAAAAAAAAAAAAAAAAA")
  return aux
}

let prueba = "['DB', [3,20], [3,19]]";
let prueba2 = "[[2,10], [3,20], [3,19]]";
const parse_array_throw = (array_str) => {
  let aux = array_str.slice(1,-1)
  let temp = aux.split(", ")
  return temp.map(x => {
    if (x[0] === "[") {
        return parse_tuple(x)
    } else {
        return x.slice(1,-1)
    } 
  })
}

services = '["service1", "service2", "service3"]'
JSON.parse(services)

const parse_tuple = (tup) => {
    return tup.slice(1,-1).split(",").map(x => parseInt(x))
    
}
console.log(parse_array_throw(prueba));
