import { attachEventTracker } from './counter.js';

// 1. Data Layer
const developer = {
  name: "Sukham",
  goal: 40,
  skills: ["C", "Python", "Git", "JavaScript"]
};

// 2. Presentation/Execution Layer
const handlePageLoad = (count) => {
  // Check if it's the initial load/execution state
  if (count === 1) {
    const message = `${developer.name} wants to hit ${developer.goal}+ LPA.`;
    alert(message);
    const dev = prompt("What are your skills?");
    alert(`Great! ${developer.name} has skills in ${developer.skills.join(', ')}. You mentioned: ${dev}. Keep learning and improving!`);
  }
};

// 3. Wiring Layer
// We hand the native 'window' object and 'load' event to our utility, along with our callback.
attachEventTracker(window, 'load', handlePageLoad);