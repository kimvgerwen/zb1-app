"use client";

import StartButton from "@/components/StartButton";
import { useRouter } from "next/navigation";
import styles from "./homepage.module.scss";
import { motion } from "framer-motion";
import { memberResults } from "@/data/results";

const text = "Which ZB1 member are you?";
const members = Object.values(memberResults);

export default function Home() {
  const router = useRouter();
  const startQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.titlecontainer}>
        <h1>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <div className={styles.photogrid}>
          {members.map((member, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <img
                key={member.name}
                src={member.image}
                alt={member.name}
                className={styles.image}
              />
            </motion.div>
          ))}
        </div>
        <StartButton buttontext="START QUIZ" onClick={startQuiz} />
      </div>
    </div>
  );
}
