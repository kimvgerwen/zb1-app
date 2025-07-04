"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { memberResults } from "@/data/results";
import StartButton from "@/components/StartButton";
import styles from "./resultpage.module.scss";

export default function ResultPage() {
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const capitalizeFirst = (str: string) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  useEffect(() => {
    const storedAnswers = localStorage.getItem("quizAnswers");
    if (!storedAnswers) return;

    const answers: string[] = JSON.parse(storedAnswers);
    const scoreMap: Record<string, number> = {};

    answers.forEach((member) => {
      scoreMap[member] = (scoreMap[member] || 0) + 1;
    });

    const topMember = Object.entries(scoreMap).reduce(
      (acc, [member, score]) => (score > acc.score ? { member, score } : acc),
      { member: "", score: 0 }
    ).member;

    setResult(topMember);
    localStorage.removeItem("quizAnswers");

    setTimeout(() => setShowResult(true), 2000);
  }, []);

  const member = result ? memberResults[result] : null;

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {!showResult && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.loadingContainer}
          >
            <h1 className={styles.title}>Calculating...</h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className={styles.loadingSpinner}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResult && member && (
          <motion.div
            key="result"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.resultContainer}
          >
            <h1 className={styles.title}>Your ZB1 Match is...</h1>
            <img
              src={member.image}
              alt={member.name}
              className={`${styles.memberImage} ${
                member.name.toLowerCase() === "gunwook"
                  ? styles.gunwookSpecial
                  : ""
              }`}
            />
            <h2 className={styles.memberName}>
              {capitalizeFirst(member.name)
                .split("")
                .map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
            </h2>
            <StartButton
              onClick={() => router.push("/quiz")}
              buttontext="START QUIZ"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
