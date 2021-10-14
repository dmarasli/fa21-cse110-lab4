function modifyArray(array, callback){
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

const newArr = modifyArray([1,2,3], doSomething);

console.log(newArr[0]);
console.log(newArr[1]);
console.log(newArr[2]);