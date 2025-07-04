"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import QuestionCard from "@/components/QuestionCard";
import styles from "./quizpage.module.scss";
import { questions } from "@/data/questions";
import { shuffleArray } from "@/utils/shuffle";

export default function QuizPage() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>(
    []
  );

  // SHUFFLE ANSWERS RANDOMLY
  useEffect(() => {
    const shuffled = questions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerSelect = (value: string) => {
    const updatedAnswers = [...answers, value];

    const isLastQuestion = currentIndex + 1 === shuffledQuestions.length;

    if (!isLastQuestion) {
      setAnswers(updatedAnswers);
      setCurrentIndex((prev) => prev + 1);
    } else {
      localStorage.setItem("quizAnswers", JSON.stringify(updatedAnswers));
      router.push("/result");
    }
  };

  if (shuffledQuestions.length === 0) {
    return <p className={styles.loading}>Loading quiz...</p>;
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            currentQuestion={currentIndex + 1}
            totalQuestions={shuffledQuestions.length}
            onSelect={handleAnswerSelect}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
