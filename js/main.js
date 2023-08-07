/**
 Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

1^2+ 2^2+2^2 = 9

**/

function squareSum(numbers){
    let squaredArray = numbers.map((num) =>  num ** 2)
    let result = squaredArray.reduce((a, b) => a + b, 0);
    console.log(squaredArray)
    return result

  }

  console.log(squareSum([1, 2, 2]))

  //What is the difference between forEach and Map?

  //so forEach just does whatever operation/formula that you place into the function and it poofs into the ether. The map method actually creates a new array and stores the data into there. 