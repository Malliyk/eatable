import AppLayout from "../layouts/AppLayout";

export default function Result() {
  return (
      <AppLayout title="Quiz Result">
            <div
                    style={{
                              textAlign: "center",
                                        marginTop: "60px",
                                                }}
                                                      >
                                                              <h1>Quiz Finished</h1>

                                                                      <h2>Your Score</h2>

                                                                              <h1>3 / 3</h1>

                                                                                      <button
                                                                                                style={{
                                                                                                            marginTop: "30px",
                                                                                                                        padding: "14px 30px",
                                                                                                                                    background: "#F57C00",
                                                                                                                                                color: "white",
                                                                                                                                                            border: "none",
                                                                                                                                                                        borderRadius: "10px",
                                                                                                                                                                                    fontSize: "18px",
                                                                                                                                                                                              }}
                                                                                                                                                                                                      >
                                                                                                                                                                                                                Continue
                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                  </AppLayout>
                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                    }