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
