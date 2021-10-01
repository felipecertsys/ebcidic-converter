const EBCDIC = require('nm-ebcdic-converter');
var encoding = require("encoding");

var chave = "Batata123";

// var utfToAscii = encoding.convert("Batata123", 'UTF-8', 'ASCII');
// var asciiToUtf = encoding.convert("a", 'ASCII', 'UTF-8');
var asciiToEbcdic = EBCDIC.fromASCII("F");
var ebcdicToAscii = EBCDIC.toASCII('C6');

// console.log(utfToAscii);
// console.log(asciiToUtf);
console.log(asciiToEbcdic);
console.log(ebcdicToAscii);