h1 = document.querySelector('h1');
pclass = document.querySelector('.parrafito');
input = document.querySelector('#entrada');
boton = document.querySelector('.btn');
entrada1 = document.querySelector('.entrada1');
entrada2 = document.querySelector('.entrada2');
calculo = document.querySelector('.sesult');
btn = document.querySelector('.button');
console.log(h1);
console.log({
    h1,
    pclass,
    input,
    boton
});
console.log(input.value);
// pclass.innerHTML = '<h2> jeje <h2/>';
pclass.innerText = 'Holiwis amigis';

console.log(boton.getAttribute('class'));
console.log(boton.setAttribute('class', 'pera'));
console.log(boton.getAttribute('class'));

pclass.classList.add('manzana');
boton.classList.remove('pera');
console.log(pclass.getAttribute('class'));
console.log(boton.getAttribute('class'));
// Experimentando xdxd

// let value = pclass.classList.contains('manzana');
// if (value === true){
//     document.write('Siiiuuuuuuuuu')
// }
// else{
//     document.write('Tristito')
// }

let img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/564x/46/cc/69/46cc6918dfcc1ba5fab32e308609f990.jpg');
console.log(img);
h1.innerText = '';
h1.append(img);

btn.addEventListener('click', calcular);
function calcular() {
    resultado1 = parseInt(entrada1.value);
    resultado2 = parseInt(entrada2.value);
    resultado = resultado1 + resultado2;
    calculo.innerText = 'Resultado = ' + resultado;
}
