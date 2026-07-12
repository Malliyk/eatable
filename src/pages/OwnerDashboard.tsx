import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function OwnerLogin() {
  const navigate = useNavigate();
    const [pin, setPin] = useState("");

      function handleLogin() {
          if (pin === "123456") {
                navigate("/owner/dashboard");
                    } else {
                          alert("Incorrect PIN");
                              }
                                }

                                  return (
                                      <AppLayout title="Owner Login">
                                            <div
                                                    style={{
                                                              maxWidth: "400px",
                                                                        margin: "0 auto",
                                                                                  padding: "20px",
                                                                                          }}
                                                                                                >
                                                                                                        <h2 style={{ textAlign: "center" }}>
                                                                                                                  Owner Login
                                                                                                                          </h2>

                                                                                                                                  <input
                                                                                                                                            type="password"
                                                                                                                                                      placeholder="Enter PIN"
                                                                                                                                                                value={pin}
                                                                                                                                                                          onChange={(e) => setPin(e.target.value)}
                                                                                                                                                                                    style={{
                                                                                                                                                                                                width: "100%",
                                                                                                                                                                                                            padding: "12px",
                                                                                                                                                                                                                        marginTop: "20px",
                                                                                                                                                                                                                                    marginBottom: "20px",
                                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                                                      />

                                                                                                                                                                                                                                                              <button
                                                                                                                                                                                                                                                                        onClick={handleLogin}
                                                                                                                                                                                                                                                                                  style={{
                                                                                                                                                                                                                                                                                              width: "100%",
                                                                                                                                                                                                                                                                                                          padding: "14px",
                                                                                                                                                                                                                                                                                                                      background: "#F57C00",
                                                                                                                                                                                                                                                                                                                                  color: "white",
                                                                                                                                                                                                                                                                                                                                              border: "none",
                                                                                                                                                                                                                                                                                                                                                          borderRadius: "10px",
                                                                                                                                                                                                                                                                                                                                                                      fontSize: "18px",
                                                                                                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                                                                                                  Login
                                                                                                                                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                    </AppLayout>
                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                      }