import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Payment from "./pages/Payment";

import QuizGame from "./quiz/QuizGame";

import OwnerLogin from "./pages/OwnerLogin";
import OwnerDashboard from "./pages/OwnerDashboard";
import BusinessSettings from "./pages/BusinessSettings";

export default function App() {
  return (
      <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                                    <Route path="/quiz" element={<Quiz />} />
                                            <Route path="/play" element={<QuizGame />} />
                                                    <Route path="/result" element={<Result />} />
                                                            <Route path="/payment" element={<Payment />} />
                                                                    <Route path="/profile" element={<Profile />} />

                                                                            <Route path="/owner" element={<OwnerLogin />} />
                                                                                    <Route path="/owner/dashboard" element={<OwnerDashboard />} />
                                                                                            <Route path="/owner/business" element={<BusinessSettings />} />
                                                                                                  </Routes>
                                                                                                      </BrowserRouter>
                                                                                                        );
                                                                                                        }