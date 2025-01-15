# JavaScript Null Handling in Function Parameters

This repository demonstrates a common issue in JavaScript: unexpected behavior when null values are passed as function parameters.  The `bug.js` file contains code that doesn't explicitly handle `null` values, leading to potential errors or unexpected results. The `bugSolution.js` file provides a solution showing how to correctly manage `null` values for robust code.

## Problem
Many JavaScript functions may not be designed to gracefully handle `null` or `undefined` input.  This can lead to unexpected results, errors, or crashes.  The `bug.js` example illustrates this.

## Solution
The best approach is to explicitly check for `null` (or `undefined`, depending on the need) values and handle them appropriately. The `bugSolution.js` file shows how to add checks at the beginning of the function to prevent unexpected behaviors.

This simple fix prevents errors and improves code reliability.