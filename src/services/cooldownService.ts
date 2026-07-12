import { settings } from "../config/settings";

const KEY = "eatable_last_attempt";

export function startCooldown() {
  localStorage.setItem(
      KEY,
          Date.now().toString()
            );
            }

            export function getRemainingSeconds() {
              const lastAttempt = localStorage.getItem(KEY);

                if (!lastAttempt) {
                    return 0;
                      }

                        const elapsed =
                            Math.floor(
                                  (Date.now() - Number(lastAttempt)) / 1000
                                      );

                                        const remaining =
                                            settings.cooldownMinutes * 60 - elapsed;

                                              return remaining > 0 ? remaining : 0;
                                              }

                                              export function isCooldownActive() {
                                                return getRemainingSeconds() > 0;
                                                }

                                                export function clearCooldown() {
                                                  localStorage.removeItem(KEY);
                                                  }