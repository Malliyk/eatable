import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

export default function Quiz() {
  const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);

        const question = questions[currentQuestion];

          function handleAnswer(selected: number) {
              let newScore = score;

                  if (selected === question.answer) {
                        newScore++;
                              setScore(newScore);
                                  }

                                      if (currentQuestion < questions.length - 1) {
                                            setCurrentQuestion(currentQuestion + 1);
                                                } else {
                                                      if (newScore === 3) {
                                                              alert("🎉 Congratulations! You won a FREE Churmuri!");
                                                                    } else {
                                                                            alert(`Score: ${newScore}/3\nBetter luck next time! Please Pay Now.`);
                                                                                  }

                                                                                        navigate("/");
                                                                                            }
                                                                                              }

                                                                                                return (
                                                                                                    <div
                                                                                                          style={{
                                                                                                                  minHeight: "100vh",
                                                                                                                          background: "#FFF7ED",
                                                                                                                                  padding: "20px",
                                                                                                                                        }}
                                                                                                                                            >
                                                                                                                                                  <h2>
                                                                                                                                                          Question {currentQuestion + 1} / {questions.length}
                                                                                                                                                                </h2>

                                                                                                                                                                      <h3>{question.question}</h3>

                                                                                                                                                                            {question.options.map((option, index) => (
                                                                                                                                                                                    <button
                                                                                                                                                                                              key={index}
                                                                                                                                                                                                        onClick={() => handleAnswer(index)}
                                                                                                                                                                                                                  style={{
                                                                                                                                                                                                                              display: "block",
                                                                                                                                                                                                                                          width: "100%",
                                                                                                                                                                                                                                                      marginTop: "15px",
                                                                                                                                                                                                                                                                  padding: "15px",
                                                                                                                                                                                                                                                                              fontSize: "16px",
                                                                                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                                          {option}
                                                                                                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                              }