import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

    return (
        <AppLayout title="EATABLE">
              <div
                      style={{
                                textAlign: "center",
                                          marginTop: "60px",
                                                  }}
                                                        >
                                                                <h1 style={{ color: "#D32F2F" }}>EATABLE</h1>

                                                                        <p>Learn • Play • Eat</p>

                                                                                <button
                                                                                          onClick={() => navigate("/quiz")}
                                                                                                    style={{
                                                                                                                marginTop: "25px",
                                                                                                                            padding: "14px 30px",
                                                                                                                                        background: "#F57C00",
                                                                                                                                                    color: "white",
                                                                                                                                                                border: "none",
                                                                                                                                                                            borderRadius: "10px",
                                                                                                                                                                                        fontSize: "18px",
                                                                                                                                                                                                  }}
                                                                                                                                                                                                          >
                                                                                                                                                                                                                    Start Quiz
                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                      </AppLayout>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                        }