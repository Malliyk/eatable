import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";

export default function App() {
  return (
      <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                                    <Route path="/profile" element={<Profile />} />
                                          </Routes>
                                              </BrowserRouter>
                                                );
                                                }