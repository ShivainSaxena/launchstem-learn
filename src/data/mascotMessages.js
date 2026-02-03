// src/data/mascotMessages.js
const messages = {
  correct: [
    "Great job! That's the right answer! 🎉",
    "You're crushing it! Keep going! 🚀",
    "Absolutely correct! You're a star! ⭐",
    "Perfect answer! You're making amazing progress! 🌟",
  ],
  wrong: [
    "Not quite right, but don't give up! Try again! 🎯",
    "Keep trying! You're getting closer! 💫",
    "Almost there! Give it another shot! 🌠",
  ],
  hint: [
    "Here's a tip: Think about what we learned in the lesson! 💡",
    "Need a hint? Review the key concepts we covered! 🤔",
    "You're close! Consider all the options carefully! 🎯",
  ],
  encouragement: [
    "Don't worry! Learning takes time and practice! 🌱",
    "Every attempt brings you closer to mastery! 💪",
    "You're making progress with every try! 🌟",
  ],
  completion: [
    "Congratulations on completing the quiz! 🎉",
    "You're becoming a space expert! 🚀",
    "Amazing work! Keep exploring and learning! ⭐",
    "Way to go! You're on your way to becoming a space pioneer! 🌟",
  ],
};

export const getRandomMessage = (type) => {
  const messageArray = messages[type];
  return messageArray[Math.floor(Math.random() * messageArray.length)];
};
