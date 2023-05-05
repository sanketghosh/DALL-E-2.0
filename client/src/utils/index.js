import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = () => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomIndex === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
};
