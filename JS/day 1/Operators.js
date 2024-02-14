/**
 * Assignment Operators
 * =
 */
var name = "Sidduganesh"
console.log(name);

/**
 * Arithmetic Operators
 * +
 * -
 * *
 * /
 * %
 */
console.log(4+5+53);
console.log(5-1);
console.log(10%2);
console.log(2**2);

//INCREMENT OPERATOR
i=5
console.log("i is "+i++);//5
console.log(i);//6

/** 
 * Relational Operator
 * ==
 * ===
 * !=
 * !==
 * >
 * <
 * >=
 * <=
 */
    //Euality
console.log(100==100)//true
console.log(100=='100');//true
    //Strict Equality = check type also
console.log(100==='100');//false
    //inequality
console.log(100!=100);//false
console.log(100!=='100');//true


/**
 * Logical Operators
 * generic eg :
 * mom make dosa or idle => OR ||
 * MOM and DAD both needed => AND &&
 */
console.log(2>4 && true);//false
console.log(false || true);//true
console.log(true ^ true);//0


/**
 * Bitwise Operators
 * =means numbers are converted into the bits and operations are performed
 */
console.log(10 & 6);//2
console.log(10 | 6 );//14


////////////////////////
/**
 * In JavaScript, operators are symbols that perform operations on variables or values. They can be used for arithmetic, comparison, logical operations, assignment, and more. Here are some common types of operators in JavaScript:

1. **Arithmetic Operators**: Used to perform arithmetic operations on numbers.
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%)
   - Increment (++)
   - Decrement (--)

2. **Assignment Operators**: Used to assign values to variables.
   - Assignment (=)
   - Addition assignment (+=)
   - Subtraction assignment (-=)
   - Multiplication assignment (*=)
   - Division assignment (/=)
   - Modulus assignment (%=)

3. **Comparison Operators**: Used to compare values.
   - Equal to (==)
   - Not equal to (!=)
   - Strict equal to (===)
   - Strict not equal to (!==)
   - Greater than (>)
   - Less than (<)
   - Greater than or equal to (>=)
   - Less than or equal to (<=)

4. **Logical Operators**: Used to combine or manipulate boolean values.
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)

5. **Bitwise Operators**: Used to perform bitwise operations on integers.
   - Bitwise AND (&)
   - Bitwise OR (|)
   - Bitwise XOR (^)
   - Bitwise NOT (~)
   - Left shift (<<)
   - Sign-propagating right shift (>>)
   - Zero-fill right shift (>>>)

6. **Unary Operators**: Operate on a single operand.
   - Unary plus (+)
   - Unary negation (-)
   - Increment (++)
   - Decrement (--)
   - Logical NOT (!)
   - Typeof (typeof)
   - Void (void)
   - Delete (delete)

7. **Ternary Operator (Conditional Operator)**: Used for decision making.
   - Conditional (ternary) operator (condition ? expr1 : expr2)

These operators are fundamental to performing various tasks and computations in JavaScript programming.
 */