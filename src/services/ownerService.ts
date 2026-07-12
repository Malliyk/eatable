import { settings } from "../config/settings";

export interface OwnerSettings {
  menuPrice: number;
    currency: string;
      timerSeconds: number;
        cooldownMinutes: number;
          requiredScore: number;
            questionsPerQuiz: number;
              moderateQuestions: number;
                difficultQuestions: number;
                  quizEnabled: boolean;
                  }

                  export function getOwnerSettings(): OwnerSettings {
                    return {
                        menuPrice: settings.menuPrice,
                            currency: settings.currency,
                                timerSeconds: settings.timerSeconds,
                                    cooldownMinutes: settings.cooldownMinutes,
                                        requiredScore: settings.requiredScore,
                                            questionsPerQuiz: settings.questionsPerQuiz,
                                                moderateQuestions: settings.moderateQuestions,
                                                    difficultQuestions: settings.difficultQuestions,
                                                        quizEnabled: settings.quizEnabled,
                                                          };
                                                          }