const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do arquivo.")

const dados = fs.readFile("file.txt", (err, data)=>{
    if (err) throw err;

});

console.log("Executando o console!");
console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Após da leitura do arquivo.");