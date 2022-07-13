/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr) {
    let doubled = [];

    for (let val of arr) {
        doubled.push(val * 2);
    }
    return doubled;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

function onlyEvenValues(arr) { 
    let filteredEvens = arr.filter(function(arr,i) {
        return arr % 2 === 0;
    })
    return filteredEvens;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

function showFirstAndLast(arr){
    let str = '';
    let FLarr = [];
    for (let name of arr) {
        let first = str.concat(name[0]);
        let last = first.concat(name[name.length - 1]);
        FLarr.push(last);
    }
    return FLarr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

function addKeyAndValue(arr,key,value){
    let newObj = arr.map(function(obj) {
        obj[key] = value;
        return obj
    })
    return newObj;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
    let lowStr = str.toLowerCase();
    let strArray = Array.from(lowStr);

    let a = 0; let e = 0; let i = 0; let o = 0; let u = 0;
    
    strArray.forEach(char => {
        if (char === 'a') {a += 1}
        if (char === 'e') {e += 1}       
        if (char === 'i') {i += 1}
        if (char === 'o') {o += 1}
        if (char === 'u') {u += 1}
    })

    let aArray = ['a', a];
    let eArray = ['e', e];
    let iArray = ['i', i];
    let oArray = ['o', o];
    let uArray = ['u', u];

    let vowelCountArr = [];

    if (a > 0) {vowelCountArr.push(aArray)} 
    if (e > 0) {vowelCountArr.push(eArray)}
    if (i > 0) {vowelCountArr.push(iArray)} 
    if (o > 0) {vowelCountArr.push(oArray)} 
    if (u > 0) {vowelCountArr.push(uArray)}

    let vowelCountObj = Object.fromEntries(vowelCountArr);

    return vowelCountObj;
}


/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let doubledVals = arr.map(function(arr) {
        return arr * 2
    })
    return doubledVals;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    let valXindex = arr.map(function(arr,i) {
        return arr * i
    })
    return valXindex;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    let mappedArr = arr.map(function(obj) {
        return obj[key];
    })
    return mappedArr;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    let fullName = arr.map(function(obj) {
        let name = Object.values(obj);
        return name.join(' ');
    })
    return fullName;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    let filtered = arr.filter(function(obj) {
        return obj[key];
    })
    return filtered;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    let filtered = arr.filter(function(val){
        return val === searchValue;
    })
    return filtered[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    let filtered = arr.filter(function(obj) {
        return obj[key] === searchValue;
    })
    return filtered[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let lowStr = str.toLowerCase()
    let strArray = Array.from(lowStr);
    let noVowelArr = strArray.filter(function(notVowel) {
        return notVowel !== 'a' && notVowel !== 'e' && notVowel !== 'i' && notVowel !== 'o' && notVowel !== 'u';
    })
    return noVowelArr.join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    let odds = [];
    for (let num of arr) {
        if (num % 2 !== 0) {
            let doubledNums = num * 2;
            odds.push(doubledNums);
        }
    }
    return odds;
}
