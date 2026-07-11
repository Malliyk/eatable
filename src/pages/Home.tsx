import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

    return (
        <div
              style={{
                      minHeight: "100vh",
                              background: "#FFF7ED",
                                      display: "flex",
                                              flexDirection: "column",
                                                      justifyContent: "center",
                                                              alignItems: "center",
                                                                      padding: "24px",
                                                                            }}
                                                                                >
                                                                                      <h1
                                                                                              style={{
                                                                                                        fontSize: "42px",
                                                                                                                  color: "#DC2626",
                                                                                                                            fontWeight: "bold",
                                                                                                                                    }}
                                                                                                                                          >
                                                                                                                                                  EATABLE
                                                                                                                                                        </h1>

                                                                                                                                                              <p
                                                                                                                                                                      style={{
                                                                                                                                                                                marginTop: "12px",
                                                                                                                                                                                          color: "#555",
                                                                                                                                                                                                    fontSize: "18px",
                                                                                                                                                                                                            }}
                                                                                                                                                                                                                  >
                                                                                                                                                                                                                          Learn • Play • Eat
                                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                                      <button
                                                                                                                                                                                                                                              onClick={() => navigate("/quiz")}
                                                                                                                                                                                                                                                      style={{
                                                                                                                                                                                                                                                                marginTop: "30px",
                                                                                                                                                                                                                                                                          background: "#F97316",
                                                                                                                                                                                                                                                                                    color: "white",
                                                                                                                                                                                                                                                                                              border: "none",
                                                                                                                                                                                                                                                                                                        borderRadius: "12px",
                                                                                                                                                                                                                                                                                                                  padding: "14px 28px",
                                                                                                                                                                                                                                                                                                                            fontSize: "18px",
                                                                                                                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                  Start Quiz
                                                                                                                                                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                              }