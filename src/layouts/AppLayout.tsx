import type { ReactNode } from "react";

interface AppLayoutProps {
  title: string;
    children: ReactNode;
    }

    export default function AppLayout({
      title,
        children,
        }: AppLayoutProps) {
          return (
              <div
                    style={{
                            minHeight: "100vh",
                                    backgroundColor: "#FFF7ED",
                                            display: "flex",
                                                    flexDirection: "column",
                                                          }}
                                                              >
                                                                    <header
                                                                            style={{
                                                                                      backgroundColor: "#F97316",
                                                                                                color: "white",
                                                                                                          padding: "18px",
                                                                                                                    textAlign: "center",
                                                                                                                              fontSize: "24px",
                                                                                                                                        fontWeight: "bold",
                                                                                                                                                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                                                                                                                                          }}
                                                                                                                                                                >
                                                                                                                                                                        {title}
                                                                                                                                                                              </header>

                                                                                                                                                                                    <main
                                                                                                                                                                                            style={{
                                                                                                                                                                                                      flex: 1,
                                                                                                                                                                                                                padding: "20px",
                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                      {children}
                                                                                                                                                                                                                                            </main>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                  }