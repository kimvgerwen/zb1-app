"use client";

import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  buttontext: string;
  onClick?: () => void;
};

function StartButton({ buttontext, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{buttontext}</span>
      <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
}

export default StartButton;
