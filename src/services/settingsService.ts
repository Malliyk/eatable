import { settings } from "../config/settings";

export interface OwnerSettings {
  menuPrice: number;
    currency: string;
      upiId: string;

        timerSeconds: number;
          cooldownMinutes: number;
            requiredScore: number;
              questionsPerQuiz: number;

                moderateQuestions: number;
                  difficultQuestions: number;

                    quizEnabled: boolean;
                    }

                    const KEY = "eatable_owner_settings";

                    export function getSettings(): OwnerSettings {
                      const saved = localStorage.getItem(KEY);

                        if (saved) {
                            return JSON.parse(saved);
                              }

                                return {
                                    menuPrice: settings.menuPrice,
                                        currency: settings.currency,
                                            upiId: "yourupi@upi",

                                                timerSeconds: settings.timerSeconds,
                                                    cooldownMinutes: settings.cooldownMinutes,
                                                        requiredScore: settings.requiredScore,
                                                            questionsPerQuiz: settings.questionsPerQuiz,

                                                                moderateQuestions: settings.moderateQuestions,
                                                                    difficultQuestions: settings.difficultQuestions,

                                                                        quizEnabled: settings.quizEnabled,
                                                                          };
                                                                          }

                                                                          export function saveSettings(data: OwnerSettings) {
                                                                            localStorage.setItem(KEY, JSON.stringify(data));
                                                                            }

                                                                            export function resetSettings() {
                                                                              localStorage.removeItem(KEY);
                                                                              }