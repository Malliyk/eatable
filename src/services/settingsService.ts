import { settings } from "../config/settings";
import type { OwnerSettings } from "./ownerService";

const KEY = "eatable_owner_settings";

export function getSettings(): OwnerSettings {
  const saved = localStorage.getItem(KEY);

    if (saved) {
        return JSON.parse(saved);
          }

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

                                                  export function saveSettings(data: OwnerSettings) {
                                                    localStorage.setItem(
                                                        KEY,
                                                            JSON.stringify(data)
                                                              );
                                                              }

                                                              export function resetSettings() {
                                                                localStorage.removeItem(KEY);
                                                                }