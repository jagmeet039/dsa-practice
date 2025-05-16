# Problem 1 : sum()
Design a function sum that can take any number of arguments and return their total. The function should work for both fixed and variable number of arguments using JavaScript features. Only numerical arguments will be provided.

# Example Inputs & Outputs
sum(1, 2, 3)                => 6
sum(10)                     => 10
sum()                       => 0
sum(5, -5, 10, 20)          => 30
sum(100, 200, 300, 400)     => 1000

# Constraints & Edge Cases
. Inputs will always be numbers (integers or floats).
. No arguments -> should return 0.
. Function must handle a variable number of arguments.
. Negative numbers should be handled correctly.
. Must not use built-in eval() or Function() constructor.