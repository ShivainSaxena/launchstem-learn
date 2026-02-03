// src/data/courseData.js
export const courseData = [
  {
    id: 1,
    title: "Space Exploration Fundamentals",
    grade: "6-8",
    subject: "Science",
    lessons: [
      {
        id: 1,
        title: "Introduction to Space Travel",
        type: "lesson",
        content: `Space travel has been humanity's greatest adventure. In this lesson, we'll explore the basic principles that make space exploration possible.`,
      },
      {
        id: 2,
        type: "quiz",
        title: "Space Travel Basics Quiz",
        questions: {
          q1: {
            text: "What force must rockets overcome to leave Earth?",
            options: [
              "Gravity",
              "Wind Resistance",
              "Magnetic Fields",
              "Solar Radiation",
            ],
            correctAnswer: "Gravity",
            hint: "Think about what keeps you on the ground! This force acts on everything on Earth. 🌍",
          },
          q2: {
            text: "Which is NOT a main component of a rocket?",
            options: [
              "Fuel Tanks",
              "Steering Wheel",
              "Propulsion System",
              "Payload Bay",
            ],
            correctAnswer: "Steering Wheel",
            hint: "Rockets are controlled by computers and thrusters, not like a car! 🚀",
          },
        },
      },
    ],
  },
  {
    id: 2,
    title: "Basic Programming Concepts",
    grade: "9-12",
    subject: "Technology",
    lessons: [
      {
        id: 1,
        title: "Introduction to Coding",
        type: "lesson",
        content:
          "Learn the fundamentals of programming and how computers process instructions.",
      },
      {
        id: 2,
        type: "quiz",
        title: "Programming Basics Quiz",
        questions: {
          q1: {
            text: "What is a variable?",
            options: [
              "A container for data",
              "A mathematical equation",
              "A computer program",
              "A type of loop",
            ],
            correctAnswer: "A container for data",
            hint: "Think about how you store different items in boxes. Variables work similarly in programming! 💭",
          },
        },
      },
    ],
  },
  {
    id: 3,
    title: "Mathematics in Space",
    grade: "9-12",
    subject: "Math",
    lessons: [
      {
        id: 1,
        title: "Orbital Mechanics",
        type: "lesson",
        content:
          "Understanding the mathematics behind orbital mechanics and space flight.",
      },
    ],
  },
];
