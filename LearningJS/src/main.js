import { attachEventTracker } from './counter.js';

// 1. Data Layer
const developer = {
  name: "Sukham",
  goal: 40,
  skills: ["C", "Python", "Git", "JavaScript"]
};
developer.age = 18;
developer.experience = 1;
developer.goal = 52;

// 2. Presentation/Execution Layer
const handlePageLoad = (count) => {
  // Check if it's the initial load/execution state
  if (count === 1) {
    const message = `${developer.name} wants to hit ${developer.goal}+ LPA.`;
    console.log(message);
    const dev = prompt("What new skills have you learned?");
    const forgotten_skill = prompt("What skill have you forgotten?");
    const forgotten_index = developer.skills.findIndex(skill => skill.toLowerCase() === forgotten_skill.toLowerCase());
    if (forgotten_index > -1) {
      developer.skills.splice(forgotten_index, 1);
    }
    if (dev) {
      developer.skills.push(dev);
    }
    console.log(`Great! ${developer.name} has skills in ${developer.skills.join(', ')}. You mentioned: ${dev}. Keep learning and improving! 
    You can also check out the skills you forgot: ${forgotten_skill}. You are ${developer.age} years old!`);
    let sum = 0;
    for (let key in developer) {
      if (typeof developer[key] === "number") {
        console.log(`The value of ${key} is ${developer[key]}`);
        sum += developer[key];
      }
    }
    console.log(`The sum of all numeric values is ${sum}`);
  }
};

// 3. Wiring Layer
// We hand the native 'window' object and 'load' event to our utility, along with our callback.
attachEventTracker(window, 'load', handlePageLoad);