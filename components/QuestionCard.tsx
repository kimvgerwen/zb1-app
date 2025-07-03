"use client";

import React from "react";
import styles from "./QuestionCard.module.scss";
import { AnswerOption } from "@/data/questions";

type QuestionCardProps = {
  question: string;
  options: AnswerOption[];
  currentQuestion: number;
  totalQuestions: number;
  onSelect: (value: string) => void;
};

function QuestionCard({
  question,
  options,
  currentQuestion,
  totalQuestions,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className={styles.card}>
      <h1>
        Question {currentQuestion} of {totalQuestions}
      </h1>
      <h2>{question}</h2>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            className={styles.optionButton}
            onClick={() => onSelect(option.value)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
