function massimo (a,b) {
    if (a < b) {
        return b;
    }
    else if (b < a) {
        return a;
    }
    else if ( a == b) {
        console.log('Sono uguali');
        return a;
    }
    else console.log('Errore');
    
}
primo = 2;
secondo = 3;


c = massimo (primo,secondo);
console.log(c);



let num = max(primo, secondo);
console.log(num);

function max (a,b) {
    return (a > b) ? a : b;
}

//comment


let input = 15;
console.log(fizzBuzz(input));

function fizzBuzz(item) {
if ((item % 3 === 0) && (item % 5 === 0)) {
    return 'fizzBuzz';
}    
else if (item % 5 === 0) {
    return 'Buzz';
}
else if (item % 3 === 0) {
    return 'fizz';
}
else if (item % 1 === 0) {
    return item;
}
else return 'Not a number';

}


console.log(checkSpeed(129));

function checkSpeed(speed) {
    if (speed > 0 && speed <= 70) return 'Ok';
    point = Math.floor((speed - 70) / 5);
    if (point < 12) return point;
    else return 'License Suspended'; 

}


showNumbers(7);

function showNumbers(limit) {
    for (let i = 1; i <= limit; i++)  {
        let evenOdd = 'ODD';
        if (i % 2 == 0) evenOdd = 'EVEN';
        console.log(i, evenOdd);
    }
}

const testArray = ['red', '', 1, 2, '', null, 5]

function countTruthy(array) {
 let count = 0;
 for (let value of array)  {
    if (value)
    count++;
}
    return count
}

console.log(countTruthy(testArray));


const movie = {
    title: 'a',
    rating: 4.5,
    director: 'b',
}

function showProperties(obj)  {
    for (let key in obj)
    if (typeof obj[key] === 'string') console.log(key, obj[key]);
}

showProperties(movie);


console.log(sum(12));

function sum(limit) {
    let somma = 0;
    for (i= 1; i <= limit; i++) {
        if (i % 3 === 0) {somma = somma + i;}
        else if (i % 5 === 0) {somma = somma + i;}
    }
    return somma;
}


const marks = [80, 80, 50];


console.log(calculateGrade(marks));

function calculateGrade(marks) {
let voto = 'Davide';
let sum = 0;
    for (let mark of marks)
        sum += mark;
        
        console.log(sum);
        let average = sum / marks.length;
        console.log(average);
        
        if (average < 60) return 'F';
        if (average < 70) return 'D';
        if (average < 80) return 'C';
        if (average < 90) return 'B';
        return 'A';
}

showStars(2);

function showStars(rows) {
let stars = '';
    for (let i = 0; i < rows; i++) {
        stars += '*';
        console.log(stars);
    }
}


showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        
        let isPrime = true;
        
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) isPrime = false; break;
        }
        if (isPrime) console.log(number);
    }
}


showPrimes2(10);

function showPrimes2(limit) {
    for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) return false;
        return true;
    }
}