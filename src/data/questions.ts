export interface Question {
      id: number;
        difficulty: "moderate" | "difficult";
          question: string;
            options: string[];
              answer: number;
              }

              export const questions: Question[] = [
                {
                    id: 1,
                        difficulty: "moderate",
                            question: "What is the capital of Karnataka?",
                                options: ["Bengaluru", "Mysuru", "Hubballi", "Belagavi"],
                                    answer: 0,
                                      },
                                        {
                                            id: 2,
                                                difficulty: "moderate",
                                                    question: "Who wrote the Indian Constitution?",
                                                        options: [
                                                              "Mahatma Gandhi",
                                                                    "Dr. B. R. Ambedkar",
                                                                          "Jawaharlal Nehru",
                                                                                "Sardar Patel",
                                                                                    ],
                                                                                        answer: 1,
                                                                                          },
                                                                                            {
                                                                                                id: 3,
                                                                                                    difficulty: "difficult",
                                                                                                        question: "Which Article of the Constitution deals with Fundamental Duties?",
                                                                                                            options: [
                                                                                                                  "Article 21",
                                                                                                                        "Article 32",
                                                                                                                              "Article 51A",
                                                                                                                                    "Article 370",
                                                                                                                                        ],
                                                                                                                                            answer: 2,
                                                                                                                                              },
                                                                                                                                              ];
