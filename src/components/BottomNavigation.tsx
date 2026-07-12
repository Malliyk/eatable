import { Link, useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation();

    const items = [
        { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
                { name: "Profile", path: "/profile" },
                  ];

                    return (
                        <div
                              style={{
                                      display: "flex",
                                              justifyContent: "space-around",
                                                      padding: "14px",
                                                              borderTop: "1px solid #ddd",
                                                                      background: "#fff",
                                                                              position: "fixed",
                                                                                      bottom: 0,
                                                                                              left: 0,
                                                                                                      right: 0,
                                                                                                            }}
                                                                                                                >
                                                                                                                      {items.map((item) => (
                                                                                                                              <Link
                                                                                                                                        key={item.path}
                                                                                                                                                  to={item.path}
                                                                                                                                                            style={{
                                                                                                                                                                        textDecoration: "none",
                                                                                                                                                                                    color:
                                                                                                                                                                                                  location.pathname === item.path ? "#D32F2F" : "#666",
                                                                                                                                                                                                              fontWeight:
                                                                                                                                                                                                                            location.pathname === item.path ? "bold" : "normal",
                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                        {item.name}
                                                                                                                                                                                                                                                                </Link>
                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                            }