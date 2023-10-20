const name = "Aman"
const repoCount = 50

// console.log(name+repoCount+"Value")

//THIS WAS NOT A GOOD WAY TO CONCAT STRINGS 

// THIS SHOULD BE USED IN MODERN JS 

console.log(`Hello my name is ${name}  and my repocount is ${repoCount}`)


//ANOTHER WAY TO DECLARE STRING 

const gameName = new String('AmanAB')


//key value pair 


// console.log(gameName[0])
// console.log(gameName.__proto__);


// const a = [1,2,3];
// const b = a;
// a.push(4);
// console.log(b.length);

function calculateCartPrice(val1, val2, ...num1) {

    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))