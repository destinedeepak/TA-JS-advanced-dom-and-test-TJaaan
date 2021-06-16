function getFullname(firstName, lastName) {
    return firstName +" "+ lastName;
}

function isPalindrome(input) {
    return input.split("").reverse().join("") === input;
}

function getCircumfrence(radius){
    return 2 * Math.PI * radius;
}

function getArea(raduis) {
    return Math.PI * (raduis ** 2);
}

module.exports = {getFullname, isPalindrome, getCircumfrence, getArea};