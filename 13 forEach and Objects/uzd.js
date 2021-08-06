//1

const obj = {};
obj.savybeA = 25;
obj.savybeB = 25;

//2
obj.sumaAB = obj.savybeA + obj.savybeB;

//3

obj.objektasC = {};

//4

obj.objektasC.savybeA = 42;
obj.objektasC.savybeB = 42;

//5

obj.objektasC.sumaAB = obj.objektasC.savybeA + obj.objektasC.savybeB;

//6

const objektoSavybes = ["bobikas", "sarikas", "margis"];

objektoSavybes.forEach(e => (obj[e] = 0));

console.log(obj);
