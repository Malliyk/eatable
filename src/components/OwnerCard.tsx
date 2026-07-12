interface OwnerCardProps {
      title: string;
        value: string;
          buttonText?: string;
            onClick?: () => void;
            }

            export default function OwnerCard({
              title,
                value,
                  buttonText = "Open",
                    onClick,
                    }: OwnerCardProps) {
                      return (
                          <div
                                style={{
                                        background: "white",
                                                borderRadius: "12px",
                                                        padding: "18px",
                                                                marginBottom: "18px",
                                                                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                                                              }}
                                                                                  >
                                                                                        <h3
                                                                                                style={{
                                                                                                          margin: 0,
                                                                                                                    marginBottom: "10px",
                                                                                                                            }}
                                                                                                                                  >
                                                                                                                                          {title}
                                                                                                                                                </h3>

                                                                                                                                                      <p
                                                                                                                                                              style={{
                                                                                                                                                                        fontSize: "18px",
                                                                                                                                                                                  marginBottom: "15px",
                                                                                                                                                                                          }}
                                                                                                                                                                                                >
                                                                                                                                                                                                        {value}
                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                    <button
                                                                                                                                                                                                                            onClick={onClick}
                                                                                                                                                                                                                                    style={{
                                                                                                                                                                                                                                              width: "100%",
                                                                                                                                                                                                                                                        padding: "12px",
                                                                                                                                                                                                                                                                  background: "#F57C00",
                                                                                                                                                                                                                                                                            color: "white",
                                                                                                                                                                                                                                                                                      border: "none",
                                                                                                                                                                                                                                                                                                borderRadius: "8px",
                                                                                                                                                                                                                                                                                                          fontSize: "16px",
                                                                                                                                                                                                                                                                                                                  }}
                                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                                {buttonText}
                                                                                                                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                            }