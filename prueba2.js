const readline = require('readline');
 
const rl = readline.createInterface(process.stdin, process.stdout);

// ['DB', [3,20], [3,19]]
const initial_score = async (array) => return rl.question('Ingrese Puntaje ', (p1) => {
	if ( parseInt(p1)!== 501) {
    array.push(parseInt(p1))
    console.log(array)
    initial_score(array)
	}
    else {
        return 'exit-promise'
    }
});

const start = async (array) =>{
	console.log('Ingrese Puntaje ')
    for await (const line of rl) {
        if(parseInt(line) === 501){
        	array.push(parseInt(line))
        	console.log(array)
        	break
        }
        else{
        	array.push(parseInt(line))
        	console.log(array)
        	console.log('Ingrese Puntaje ')
        }
    }
}

const aux = [10]

initial_score(aux).then((result)=>{
    console.log(result)
    if(result === 'exit-promise'){
        console.log('finish')
        console.log(aux)
    }

})