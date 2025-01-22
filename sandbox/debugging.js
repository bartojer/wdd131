let radius = 3;
console.log("radius:", radius);

let area  = 0;
console.log("area:", area);

area = areaCircle(radius)
console.log("area:", area);

radius = 4;
console.log("radius:", radius);

area = areaCircle(radius)
console.log("area:", area);

function areaCircle(radius) {
    const PI = 3.14;
    return radius * radius * PI;
}