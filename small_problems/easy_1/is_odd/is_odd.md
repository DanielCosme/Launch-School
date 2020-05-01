Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value

Problem

- Input
  - Integer
    - positive
    - negative
    - zero
- Output
  - true/false
- Rules / Requirements
  - No need to validate input
  - Absolute value of input is odd or even
  - What makes a number odd or not?

Examples
is_odd(0) => "false"
is_odd(1) => "true"
is_odd(2) => "false"
is_odd(-2) => "false"
is_odd(3) => "true"

Data Structure
number

- because we need to do mathematical calculation

Algorithm

- get absolute value of input
- determine if is odd or not
  - we divide the input by 2
    - if reminder === to 0
    - the number is even
    - else
      the number is odd
