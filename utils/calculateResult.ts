import { AnswerOption } from "@/data/questions";

export function calculateResult(answers: AnswerOption[]): string {
  const scoreMap: { [member: string]: number } = {};

  answers.forEach((answer) => {
    const member = answer.value;
    scoreMap[member] = (scoreMap[member] || 0) + 1;
  });

  let topMember = "";
  let highestScore = 0;

  for (const member in scoreMap) {
    if (scoreMap[member] > highestScore) {
      highestScore = scoreMap[member];
      topMember = member;
    }
  }

  return topMember;
}
