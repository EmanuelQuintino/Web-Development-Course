// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Expressions Grouping Operator
let total = (2 + 3) * 3;
console.log(total);

// Operator Precedence

// grouping                      ()
// negation and increment        ! ++ --
// multiplication and division   * /
// addition and subtraction      + -
// comparison                    < <= > >=
// equality                      == != === !==
// and                           &&
// or                            ||
// conditional                   ?:
// assignment                    = += -= *= %=

console.log(7 + 8 / 2);
console.log((7 + 8) / 2);
console.log(3 > 2 && 4 < 10);
console.log(3 < 2 || 4 < 10);
console.log(6 < 2 || 4 > 10);
console.log(3 > 2 > 1);
console.log(true == 1); // true == 1 false == 0
console.log(3 > 2 == 1);
console.log(true === 1);
console.log(3 > 2 && 2 > 1);
