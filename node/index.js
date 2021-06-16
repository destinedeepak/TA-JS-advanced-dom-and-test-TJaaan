const moment = require("moment");
const lodash = require("lodash");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format('MMM Do YY'));

console.log(moment('2020-01-01', 'YYYY-MM-DD').isValid());
console.log(moment('2020-14-01', 'YYYY-MM-DD').isValid());

console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'month').calendar());
console.log(moment().add(7, 'year').calendar());

console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'month').calendar());
console.log(moment().subtract(7, 'year').calendar());

var a = moment([2014,11,27]);
var b = moment([2015,09,11]);
console.log(a.diff(b,"days")," days");

var c = moment([2014,11,27]);
var d = moment([2015,09,16]);
console.log(c.diff(d,"days")," days")

console.log(moment('2020-01-01').isAfter('2018-01-01'));
console.log(moment('2010-01-01').isAfter('2018-01-01'));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());


let  arr = [17,52,53,4,5,76,8,555,5];
console.log(lodash.chunk(arr,3));

let  arr1 = [null,52,false,4,undefined,76,8,NaN,5,""];
console.log(lodash.compact(arr));

console.log(lodash.compact(arr, 2, [3], [[4]]));
console.log(lodash.difference(arr, arr1));
console.log(lodash.drop(arr,3));





