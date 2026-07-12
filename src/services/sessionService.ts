const SESSION_KEY = "eatable_current_session";

export interface UserSession {
  name: string;
    mobile: string;
      startedAt: number;
      }

      export function saveSession(session: UserSession) {
        localStorage.setItem(
            SESSION_KEY,
                JSON.stringify(session)
                  );
                  }

                  export function getSession(): UserSession | null {
                    const data = localStorage.getItem(SESSION_KEY);

                      if (!data) {
                          return null;
                            }

                              return JSON.parse(data);
                              }

                              export function clearSession() {
                                localStorage.removeItem(SESSION_KEY);
                                }