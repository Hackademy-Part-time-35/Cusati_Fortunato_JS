//------------ Traccia 1 --------------//

let numeri = [1,5,3,9,13,7,98,43];
numeri.sort((a, b) => b - a)
console.log(numeri);

let numeri_decrescenti = [13,67,54,3,4,9,14,79,35,13,47,89,53,234,67,234,678,234,2,35];
numeri_decrescenti.sort((a, b) => a - b)
console.log(numeri_decrescenti);

//----------- Traccia 2 --------------//

let media_num = [13,65,12,4,56,8];
let num = media_num.reduce((acc, elemento) => {
	let somma_numeri = acc + elemento;
    return somma_numeri;
});

let media = num / media_num.length;

console.log(media);

//------------ Traccia 3 ------------//

let arr_incassi = [14, 20, 54, 18, 24];
let arr_iva = [];

function iva(a) {
   iva = a * 22 / 100;
    arr_iva.push(iva);
}
arr_incassi.forEach(iva);

console.log(arr_iva);
