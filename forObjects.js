const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
console.log(key, circle[key]);

console.log(circle.keys);


// street
// city
// zip
// showAddress(address)

//let address = {
//    street: 'a',
//    city: 'b',
//    zipCode: 'c'
//};

// Factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


let address1 = createAddress('a','b','c');
let address2 = createAddress('a','b','c');
let address3 = address1;


function areEqual(address1,address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1,address2) {
    return address1 === address2;
}

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));
console.log(areEqual(address1,address3));
console.log(areSame(address1,address3));


function showAddress(address) {
    for (let key in address) 
    console.log(key, address[key]);
}

showAddress(address1);