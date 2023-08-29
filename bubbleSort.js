/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

    Stable sort
    
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.

    Space: O(1) constant.

    For review, create a function that uses BubbleSort to sort an unsorted array in-place.

    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given numbers in-place by mutating the array.
 * Best: O(n) linear when array is already sorted. (Smaller data sets are pretty good.)
 * Average: O(n^2) quadratic. (Larger the data set, the less efficient it gets! So it scales poorly.)
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given numbers after being sorted.
 */
function bubbleSort(numbers = []) {
  // Notes:
  // 1. If we find we need to swap the values, we'll want to preserve the data for the swap.
  // What can we use to hold onto data when swapping in place?
  // "in -place" - Kenneth, 2023
  // With a *temp*
  for (var i = 0; i < numbers.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < numbers.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (numbers[j] > numbers[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  return numbers;
}
console.log(bubbleSort(numbersOrdered));
console.log(bubbleSort(numbersRandomOrder));
console.log(bubbleSort(numbersReversed));

/*****************************************************************************/
