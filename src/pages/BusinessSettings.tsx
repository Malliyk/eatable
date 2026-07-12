import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import OwnerCard from "../components/OwnerCard";
import { getSettings } from "../services/settingsService";

export default function OwnerDashboard() {
  const navigate = useNavigate();
    const settings = getSettings();

      return (
          <AppLayout title="Owner Console">
                <div
                        style={{
                                  padding: "20px",
                                          }}
                                                >
                                                        <h2>EATABLE Owner Console</h2>

                                                                <OwnerCard
                                                                          title="💰 Business Settings"
                                                                                    value={`Price: ${settings.currency}${settings.menuPrice}`}
                                                                                              buttonText="Open"
                                                                                                        onClick={() => navigate("/owner/business")}
                                                                                                                />

                                                                                                                        <OwnerCard
                                                                                                                                  title="🎉 Promotions"
                                                                                                                                            value="Coming Soon"
                                                                                                                                                      buttonText="Open"
                                                                                                                                                                onClick={() => {}}
                                                                                                                                                                        />

                                                                                                                                                                                <OwnerCard
                                                                                                                                                                                          title="❓ Quiz Settings"
                                                                                                                                                                                                    value={`${settings.questionsPerQuiz} Questions • ${settings.timerSeconds} Seconds`}
                                                                                                                                                                                                              buttonText="Open"
                                                                                                                                                                                                                        onClick={() => {}}
                                                                                                                                                                                                                                />

                                                                                                                                                                                                                                        <OwnerCard
                                                                                                                                                                                                                                                  title="💳 UPI Settings"
                                                                                                                                                                                                                                                            value="Coming Soon"
                                                                                                                                                                                                                                                                      buttonText="Open"
                                                                                                                                                                                                                                                                                onClick={() => {}}
                                                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                  </AppLayout>
                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                    }