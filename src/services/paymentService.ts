import { getSettings } from "./settingsService";

export function getPaymentDetails() {
  const settings = getSettings();

    return {
        amount: settings.menuPrice,
            currency: settings.currency,
                upiId: settings.upiId,
                  };
                  }