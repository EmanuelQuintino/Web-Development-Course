// // *Expressions and Operators


// // Arithmetic Operators
        // addition +
        // subtraction -
        // multiplication *
        // division /
        // remainder %
        // exponentiation ** (to square root use (1/2))
        // increment ++
        // decrement --
         
        let num1 = '4'
        let num2 = 3
        // console.log(num1 ** num2)


// // Assignment (Atribuição)
        // num1 = Number(num1)

        // num1 = num1 + 2
        
        // num1 += 2
        // num1 -= 2
        // num1 *= 2
        // num1 /= 2
        // num1 &= 2
        // num1 **= 2
        // console.log(num1)


// // Comparison Operators (Boolean)
        // >    >=
        // <    <=
        // ==   !=
        // ===  !==

        // console.log(num1 > num2)
        // console.log(num1 >= num2)
        // console.log(num1 < num2)
        // console.log(num1 <= num2)
        // console.log(num1 == num2)
        // console.log(num1 != num2)
        // console.log(num1 === num2)
        // console.log(num1 !== num2)


// // Logical Operators (Boolean)
        // and  &&
        // or   ||
        // not  !

        //Ir para a Walt Disney?

        let pouparDinheiro = true
        let juntarDinheiro = true

        // console.log(pouparDinheiro)
        
        // console.log(pouparDinheiro && juntarDinheiro)

        let guardarPoupanca = false
        let guardarSelic = true
        
        // console.log(guardarPoupanca || guardarSelic)

// // Operators

// // Binary
        let n1 = 8
        let n2 = 7
        // console.log(n1 + n2)

// // Unary
        // n1++
        // console.log(n1++)
        // console.log(n1)
        // console.log(++n1)
        // console.log(typeof n2)
        
        // const fruits = ['banana', 'maçã', "Uva"] 
        // delete fruits[1]
        // console.log(fruits)

// // Ternary

        // test ? true : false

        // console.log(n1 > n2 ? 'Yes' : 'No')
        
        let avarege = 7
        // console.log(avarege >= 7 ? 'Aprovado': 'Reprovado')
        
        // * Cuidado com valores Truthy e False onde o booleano é considerado obrigatório (condicionais e loops).
        
        // Truthy               False
        // 1, 1.5, -1           0
        // " ", "0", "false"    ""
        // {}                   null
        // []                   undefined
        // Infinity, -Infinity  NaN
                
        // console.log( Infinity? 'Aprovado': 'Reprovado')

// // Expressions Grouping Operator
        // let total = (2 + 3) * 3
        // console.log(total)


// // Operator Precedence

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


// console.log(7 + 8 / 2)
// console.log((7 + 8) / 2)
// console.log(3 < 2 || 4 < 10)
console.log(3 > 2 > 1) // true = 1 false = 0
// console.log(true == 1) 
// console.log(true === 1) 
// console.log(3 > 2 && 2 > 1)


// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators