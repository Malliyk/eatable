export interface Promotion {
      enabled: boolean;
        type: "percentage" | "fixed" | "finalPrice";
          value: number;
          }

          const defaultPromotion: Promotion = {
            enabled: false,
              type: "percentage",
                value: 0,
                };

                const KEY = "eatable_promotion";

                export function getPromotion(): Promotion {
                  const saved = localStorage.getItem(KEY);

                    if (!saved) {
                        return defaultPromotion;
                          }

                            return JSON.parse(saved);
                            }

                            export function savePromotion(promotion: Promotion) {
                              localStorage.setItem(KEY, JSON.stringify(promotion));
                              }

                              export function clearPromotion() {
                                localStorage.removeItem(KEY);
                                }