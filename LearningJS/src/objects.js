import { prompt, closeIO } from './io.js'; // Import the prompt and closeIO functions from io.js

//All async functions to handle user input and output must be wrapped in an async function to use await
async function main() {
  console.log("Elementary multiplication and addition operations on objects in JavaScript.");
  let calculator = {
    async read() {
      const a = parseInt(await prompt("Enter the first number: "));
      const b = parseInt(await prompt("Enter the second number: "));
      this.a = a;
      this.b = b;
    },
    sum() {
      return this.a + this.b;
    },
    multiply() {
      return this.a * this.b;
    }
  };
  await calculator.read();
  console.log(`The sum of ${calculator.a} and ${calculator.b} is: ${calculator.sum()}`);
  console.log(`The product of ${calculator.a} and ${calculator.b} is: ${calculator.multiply()}`);
  closeIO(); // Close the readline interface after all prompts are done
}

main(); // Call the main function to execute the program


