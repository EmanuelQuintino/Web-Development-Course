# Expressions and Operators

## Arithmetic Operators

- addition (+)
- subtraction (-)
- multiplication (\*)
- division (/)
- remainder (%)
- exponentiation (**) to square root use " ** 1/2 "
- increment (++)
- decrement (--)

## Assignment (Atribuição)

- =
- +=
- -=
- \*=
- /=
- &=
- \*\*=

## Comparison Operators (Boolean)

- \> >=
- < <=
- == !=
- === !==

## Logical Operators (Boolean)

- && (and)
- || (or)
- ! (not)

## TRUTH TABLE

### Conjunction

<pre>
P   Q   P^Q
V   V    V
V   F    V
F   V    V
F   F    F
</pre>

### Disjunction

<pre>
P   Q   PvQ
V   V    V
V   F    F
F   V    F
F   F    F
</pre>

### Negation

<pre>
P   Q   ~P ~Q
V   V    F  F
V   F    F  V
F   V    V  F
F   F    V  V
</pre>

## Type Operators

- Unary
- Binary
- Ternary (test ? true : false)

## Truthy e False

Be careful with values where Boolean is considered mandatory (conditionals and loops)

<pre>
Truthy                  Falsy
1, 1.5,                 -1 0
" ", "0", "false"       “”
{ }                     null
[ ]                     undefined
Infinity, -Infinity     NaN
</pre>

## Operator Order Precedence

<pre>
Grouping                              ( )
Negation, Increment and Decrement     ! ++ --
Exponentiation                        **
Multiplication and Division           * /
Addition and Subtraction              + -
Comparison                            < <= > >=
Equality                              == != === !==
And                                   &&
Or                                    ||
Conditional Ternary                   ? :
Assignment                            = += -= *= %=
</pre>

## Logical and Nullish Coalescing Operator

- &&
- ||
- ??

## Links

- [Expressions and Operators](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)

- [Nullish Coalescing Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
