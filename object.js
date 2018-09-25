
// Factory Function
function createCircle(radius) {
    return {
        radius,   //equivalent to radius: radius,
        draw() {
            console.log('draw');
        }
    };
    
}

const circle1 = createCircle(1);
console.log(circle1);




//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(7);

let vero = true;
