'use strict';

// variabile
const containerFizzBuzz = document.querySelector('.fizz-buzz-container')
let row = '';

// ciclo da 1 a 100 
for (let i= 1; i <= 100; i++){
    const tab = document.createElement('div');
    containerFizzBuzz.append(tab);

    // ciclo che assegna la parola FizzBuzz per tutti i numeri multipli di 3 e 5 
    if(i % 15 === 0){
        row ='FizzBuzz'
        tab.append(row);
        tab.classList.add('FizzBuzz');
        console.log('FizzBuzz');
    }

    // ciclo che assegna la parola Buzz per tutti i numeri multipli di 5
    else if(i % 5 === 0){
        row ='Buzz';
        tab.append(row);
        tab.classList.add('Buzz');
        console.log('Buzz');
    }

    // ciclo che assegna la parola fizz per tutti i numeri multipli di 3
    else if(i % 3 === 0){
        row ='Fizz';
        tab.append(row);
        tab.classList.add('Fizz');
        console.log('Fizz');
    }

    // altrimenti stampa tutti i numeri rimanenti
    else {
        tab.append(i);
        tab.classList.add('number')
        console.log(i);
    }
}