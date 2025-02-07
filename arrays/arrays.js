const steps = ["one", "two", "three"];

const listTemplate = (step) => {
    return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join("")
console.log(stepsHtml)

// grades 
// map
const letterGrades = ["A", "b", "C", "j"]

const getGpa = (letter) => {
    letter = letter.toUpperCase();
    switch (letter) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        case "D":
            return 1;
        default:
            return 0;
    }
}
gpaPoints = letterGrades.map(getGpa)
console.log(gpaPoints)

// reduce 
const sum = (total, current) => total + current;
const gpaTotal = gpaPoints.reduce(sum, 0);
console.log(gpaTotal);

// filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruits.filter(function (fruit)
{
    return fruit.length < 6
})
console.log (shortFruits);

// indexOf
numbers = [12, 34, 21, 54];
luckyNumber = 21;
luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex, luckyNumber);