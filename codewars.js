// Multiply

function multiply(a, b) {
    return a * b
}


// Even or Odd

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}


// Even or Odd с использованием тернарного оператора ?

function evenOrOdd2(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

// Return Negative

function makeNegative(num) {
    if (num < 0) {
        return (num)
    } else {
        return (-num)
    }
}

// Return Negative с использованием тернарного оператора ?

function makeNegative2(num) {
    return num < 0 ? num : -num
}

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
    if (bool) {
        return "Yes"
    } else {
        return "No"
    }
}

// Convert boolean values to strings 'Yes' or 'No' с использованием тернарного оператора ?

function boolToWord2(bool) {
    return bool ? "Yes" : "No"
}

// Sum of positive

function positiveSum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i]
        }
    }
    return sum
}

// Find the smallest integer in the array

function findSmallestInt(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

// Opposite number

function opposite(number) {
    return -number
}

opposite()

// String repeat

function repeatStr(n, s) {
    if (n <= 0) {
        return alert('Not Possible')
    }
    {
        return s.repeat(n)
    }
}

// Reversed String
function solution(str) {
    let basic = ""
    for (let i = str.length-1; i >= 0; i--) {
        basic = basic + str[i]
    }
    return basic
}

