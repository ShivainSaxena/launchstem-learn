// src/components/QuizComponent.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RocketMascot from "./RocketMascot";
import { getRandomMessage } from "../data/mascotMessages";

function QuizComponent({ quiz, nextItem, prevItem, courseId }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [mascotMessage, setMascotMessage] = useState("");

  console.log(quiz.content);

  const handleAnswerSelect = (questionIdx, answer) => {
    // If this question is already answered correctly, don't allow changes
    if (correctAnswers[questionIdx]) return;

    const questions = JSON.parse(quiz.content);
    const question = questions[questionIdx];
    const isCorrect = answer === question.answer;

    if (isCorrect) {
      setMascotMessage(getRandomMessage("correct"));
      setCorrectAnswers((prev) => ({
        ...prev,
        [questionIdx]: true,
      }));
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIdx]: answer,
      }));
    } else {
      setMascotMessage(question.hint || getRandomMessage("wrong"));
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIdx]: answer,
      }));
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-[#2f9edd]/20">
      <h2 className="text-2xl font-bold text-white mb-6">{quiz.title}</h2>
      <div className="space-y-6">
        {JSON.parse(quiz.content).map((question, qindex) => (
          <div key={qindex} className="space-y-4">
            <p className="text-white font-medium">{question.question}</p>
            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(qindex, option)}
                  disabled={correctAnswers[qindex]}
                  className={`p-3 rounded-lg text-left transition-colors ${
                    correctAnswers[qindex] && option === question.answer
                      ? "bg-green-600 text-white"
                      : selectedAnswers[qindex] === option
                      ? "bg-[#2f9edd] text-white"
                      : "bg-white/5 hover:bg-white/10 text-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-4">
          {prevItem && (
            <Link
              to={`/course/${courseId}/item/${prevItem.id}`}
              className="px-4 py-2 rounded-lg bg-[#013c58] hover:bg-[#013c58]/80 text-white transition-colors border border-[#2f9edd]/20"
            >
              ← Previous
            </Link>
          )}
          <Link
            to={`/course/${courseId}`}
            className="px-4 py-2 rounded-lg bg-[#013c58] hover:bg-[#013c58]/80 text-white transition-colors border border-[#2f9edd]/20"
          >
            Back to Course
          </Link>
        </div>
        {nextItem && (
          <Link
            to={`/course/${courseId}/item/${nextItem.id}`}
            className="px-4 py-2 rounded-lg bg-[#2f9edd] hover:bg-[#2f9edd]/80 text-white transition-colors"
          >
            Next →
          </Link>
        )}
      </div>
      <RocketMascot message={mascotMessage} isVisible={true} />
    </div>
  );
}

export default QuizComponent;
