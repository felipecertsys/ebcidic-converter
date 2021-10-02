const EBCDIC = require('nm-ebcdic-converter');

let chave = "Batata123";

let arrChave1 = [];

chave.split('').forEach(x => {
    var asciiToEbcdic = EBCDIC.fromASCII(x);
    arrChave1.push(asciiToEbcdic);
});

console.log(arrChave1);

let arrChave2 = [];

arrChave1.forEach(x => {
    var ebcdicToAscii = EBCDIC.toASCII(x)
    arrChave2.push(ebcdicToAscii)
})

let string = arrChave2.join('');
console.log(string);
console.log(Buffer.byteLength(string,));