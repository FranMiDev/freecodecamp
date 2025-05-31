// step 33
/*
Para generar una pirámide, tendrá que crear múltiples filas. 
Cuando tengas que realizar una tarea repetidamente hasta que 
e cumpla una condición, usarás un bucle. Hay muchas maneras 
de escribir un bucle.
 */
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*
for (let i = 1; i <= count; i++) {
   rows.push(padRow(i, count));
}
*/

if(true){
  console.log("Condition is true");
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);