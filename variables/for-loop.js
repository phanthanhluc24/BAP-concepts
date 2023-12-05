const arr = [1, 2, 3, 4]
const newArray = []
for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i] * 3;
}
console.log(newArray);

function calculation(arr) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[i] * 3;
    }
    return newArray
}

const arrTransformed=calculation(arr)
console.log(arrTransformed);