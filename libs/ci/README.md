# ci

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test ci` to execute the unit tests via [Jest](https://jestjs.io).

## Chosen approach

The approach I'll be taking when developing the library will be TDD, but a very simple and straightforward approach. [Based on this talk.](https://www.youtube.com/watch?v=EZ05e7EMOLM)

1. Define the behaviour that you wish to code
2. Use a Red-Green-Refactor approach to create my tests.
   1. Red: Create a test for that behaviour that is designed to fail.
   2. Green: Write code that will make the test pass. (However, do not worry about the design of the code yet, merely write code that will solve the problem, copy from Stack Overflow if necessary).
   3. Refactor: Once you have code that passes the test, DO NOT REWRITE THE TEST. This step is about focusing on the design of the code. Code patterns will expose themselves through this process and you will be able to create decent abstractions.

Some notes on the testing approach:

- The test you write is only about testing the behaviour, not the implementation. Thus, if there are no new requirements for the code, then you should be able to refactor without changing the result of the test.
- If you need to test something about the implementation of your code, write it, refactor it, note it and then delete your test. The next person to touch your code shouldn't be constrained with how you wrote the code.
