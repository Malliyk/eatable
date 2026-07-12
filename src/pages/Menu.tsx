import AppLayout from "../layouts/AppLayout";

export default function Menu() {
  return (
      <AppLayout title="Menu">
            <div style={{ padding: "20px" }}>
                    <h2>Today's Menu</h2>

                            <div
                                      style={{
                                                  border: "1px solid #ddd",
                                                              borderRadius: "12px",
                                                                          padding: "16px",
                                                                                      marginTop: "20px",
                                                                                                }}
                                                                                                        >
                                                                                                                  <h3>Churmuri</h3>

                                                                                                                            <p>Price: ₹30</p>

                                                                                                                                      <p>
                                                                                                                                                  ✔ Score <b>3/3</b> in today's quiz and get this plate FREE!
                                                                                                                                                            </p>
                                                                                                                                                                    </div>
                                                                                                                                                                          </div>
                                                                                                                                                                              </AppLayout>
                                                                                                                                                                                );
                                                                                                                                                                                }