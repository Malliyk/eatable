import { settings } from "../config/settings";

function getKey(mobile: string) {
  return `eatable_cooldown_${mobile}`;
  }

  export function startCooldown(mobile: string) {
    localStorage.setItem(
        getKey(mobile),
            Date.now().toString()
              );
              }

              export function getRemainingSeconds(mobile: string) {
                const lastAttempt = localStorage.getItem(getKey(mobile));

                  if (!lastAttempt) {
                      return 0;
                        }

                          const elapsed = Math.floor(
                              (Date.now() - Number(lastAttempt)) / 1000
                                );

                                  const remaining =
                                      settings.cooldownMinutes * 60 - elapsed;

                                        return remaining > 0 ? remaining : 0;
                                        }

                                        export function isCooldownActive(mobile: string) {
                                          return getRemainingSeconds(mobile) > 0;
                                          }

                                          export function clearCooldown(mobile: string) {
                                            localStorage.removeItem(getKey(mobile));
                                            }