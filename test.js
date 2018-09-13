
let hour = 15;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 24) {
    console.log('Good afternoon');
}
else if (hour >= 0 && hour < 6){
    console.log('Good sleep');
}
else if (hour < 0 || hour > 24) {
    console.log('This is not possible');
} 
else   
 console.log('Good Evening');



 //let role = 'guest';
 let role = 'moderator';
 //let role;

 switch (role) {
     case 'guest':
        console.log('Guest User');
        break;

     case 'moderator':
        console.log('Moderatore User');
        break;

    default:
        console.log('Unknown user');
 }

 if (role=='guest')  console.log('guest user');
 else if (role=='moderator') console.log('moderator user');
 else console.log('unknown user');


 for (let i = 1; i <= 5; i++) {
    console.log('Hello world', i);
    if (i % 2 !== 0) console.log(i);
 }
 
let i = 1;
 while (i <=5) {
    console.log('Hello world', i);
    if (i % 2 !== 0) console.log(i);
    i++
}

//comment test commit

 