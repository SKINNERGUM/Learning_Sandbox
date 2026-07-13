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
  console.log(`Now for the next part, we will make a "new" calculator object and perform the same operations.`);
  function Calculator() {
    this.read = async function () {
      const a = parseInt(await prompt("Enter the first number for the new calculator: "));
      const b = parseInt(await prompt("Enter the second number for the new calculator: "));
      this.a = a;
      this.b = b;
    }
    this.sum = async function () {
      return this.a + this.b;
    }
    this.multiply = async function () {
      return this.a * this.b;
    }
  };
  let Calculator2 = new Calculator();
  await Calculator2.read();
  console.log(`The sum of ${Calculator2.a} and ${Calculator2.b} is: ${await Calculator2.sum()}`);
  console.log(`The product of ${Calculator2.a} and ${Calculator2.b} is: ${await Calculator2.multiply()}`);

  //Now to construct an accumulator object that will keep track of the sum of numbers entered by the user
  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = async function () {
      const number = parseInt(await prompt("Enter a number to add to the accumulator: "));
      this.value += number;
    }
  };
  let accumulator = new Accumulator(0);
  let numberOfEntries = parseInt(await prompt("How many numbers would you like to add to the accumulator? "));
  for (let i = 0; i < numberOfEntries; i++) {
    await accumulator.read();
  };
  console.log(`The total accumulated value is: ${accumulator.value}`);
  closeIO(); // Close the readline interface after all prompts are done
};

main(); // Call the main function to execute the program


