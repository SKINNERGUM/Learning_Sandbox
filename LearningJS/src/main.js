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
    const dev = prompt("What new skills have you learned?");
    const forgotten_skill = prompt("What skill have you forgotten?");
    const forgotten_index = developer.skills.indexOf(forgotten_skill);
    if (forgotten_index > -1) {
      developer.skills.splice(forgotten_index, 1);
    }
    if (dev) {
      developer.skills.push(dev);
    }
    alert(`Great! ${developer.name} has skills in ${developer.skills.join(', ')}. You mentioned: ${dev}. Keep learning and improving!`);
  }
};

// 3. Wiring Layer
// We hand the native 'window' object and 'load' event to our utility, along with our callback.
attachEventTracker(window, 'load', handlePageLoad);