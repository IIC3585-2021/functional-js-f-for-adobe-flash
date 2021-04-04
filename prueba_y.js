const factorial_gen1 = f => (n => ((n === 0) ? 1 : n * f(n - 1)));
const factorial_gen2 = (func) => f => (n => ((n === 0) ? 1 : func(n, f(n - 1))));
const factorial_gen3 = (func) => f => (async n => ((n === 0) ? 1 : func(n, f(n - 1))));
const mult = (a,b) => (a*b)
const Y = f => (x => x(x))(x => f(y => x(x)(y)))

console.log(Y(factorial_gen3(mult))(3))