function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; //Handle non-number values
  }
  return a + b; // Perform the intended operation
}
console.log(foo(10, 5)); // Output: 15
console.log(foo(null, 5)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo('hello',5)); //Output: NaN