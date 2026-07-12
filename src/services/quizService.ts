import { questions } from "../data/questions";
import { settings } from "../config/settings";

export function getQuizQuestions() {
  const moderate = questions.filter(
      (q) => q.difficulty === "moderate"
        );

          const difficult = questions.filter(
              (q) => q.difficulty === "difficult"
                );

                  const shuffle = <T,>(array: T[]) =>
                      [...array].sort(() => Math.random() - 0.5);

                        const selected = [
                            ...shuffle(moderate).slice(
                                  0,
                                        settings.moderateQuestions
                                            ),
                                                ...shuffle(difficult).slice(
                                                      0,
                                                            settings.difficultQuestions
                                                                ),
                                                                  ];

                                                                    return shuffle(selected);
                                                                    }