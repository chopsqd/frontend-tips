const arr = [1, 4, 5, 8, 1, 2, 7, 5, 2, 11, 33, -7, 12, -10, 5]
let count = 0

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j <array.length; j++) {
            if(array[j+1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count += 1
        }
    }
    return array
}

console.log(bubbleSort(arr))
console.log('Count = ', count)