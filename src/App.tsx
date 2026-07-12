import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import QuizGame from "./quiz/QuizGame";

export default function App() {
  return (
      <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                                    <Route path="/quiz" element={<Quiz />} />
                                            <Route path="/play" element={<QuizGame />} />
                                                    <Route path="/result" element={<Result />} />
                                                            <Route path="/profile" element={<Profile />} />
                                                                  </Routes>
                                                                      </BrowserRouter>
                                                                        );
                                                                        }