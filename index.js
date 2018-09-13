  // Comment
  let person = {
    name: 'Davide',
    age: 36
  }
  
   

  function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
  }


  greet('Davide', 'Piumetti');

  greet('Mondo');



  function square(number) {
    return number*number;
  }  

  let number = square(2);
  console.log(number);
  console.log(square(number));

  console.log(1 === 1);
  console.log('1' === 1);
  console.log(1 == 1);
  console.log('1' == 1);
  console.log(true == 0);
  console.log(true == 1);

  let points = 110;
  let type = points > 100 ? 'gold' : 'silver';
  console.log(type);


  let highIncome = true;
  let goodCreditScore = true;
  let eligibleForLoan = highIncome && goodCreditScore;
  let applicationRefused = !eligibleForLoan;
  console.log('Eligible', eligibleForLoan);
  console.log('Application refused', applicationRefused);

  let userColor = undefined;
  let defaultColor = 'blue';
  let currentColor = userColor || defaultColor;
  console.log(currentColor);


  const readPermission = 4;
  const writePermission = 2;
  const executePermission = 1;

  let myPermission = 0;
  myPermission = myPermission | writePermission | readPermission;

  let message = (myPermission & readPermission) ? 'Yes' : 'No';
  console.log(message);

  let x = 10;
  let y = x++;
  console.log(x, y);



  let a = 'red';
  let b = 'blue';

  let lista = [a,b];


function swap(lista){
  let c = lista[0];
  lista[0] = lista[1];
  lista[1] = c;
//return(lista);
}

swap(lista);

  console.log(lista[0]);
  console.log(lista[1]);