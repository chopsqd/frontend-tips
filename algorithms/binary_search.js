const array = [1, 4, 5, 8, 1, 2, 7, 5, 2, 11]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while(found === false && start <= end) {
        count += 1

        middle = Math.floor((start + end)/2)

        if(array[middle] === item) {
            found = true
            position = middle
            return position
        }

        if(item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

// console.log(binarySearch(array, 7))
// console.log('Count = ', count)

function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end)/2)
    count += 1
    if(item === array[middle]) {
        return middle
    }
    if(item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}

console.log(recursiveBinarySearch(array, 7, 0, array.length))
console.log('Count = ', count)