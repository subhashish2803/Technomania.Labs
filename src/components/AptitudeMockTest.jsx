import { useState, useEffect } from "react";

const questions = [
  { question: "What is the value of (a + b + c)² : (a³ + b³ + c³) if (ab + bc + ca) = 131, (a² + b² + c²) = 138 and abc = 280?", options: ["15 : 43", "18 : 41", "20 : 49", "17 : 434"] },
  { question: "By which of the following is 19541742 divisible?", options: ["Both I and III", "Only III", "Both II and III", "Only I"] },
  { question: "Simplify: (0.7 × 0.7 × 0.7 + 0.3 × 0.3 × 0.3 + 0.3 × 0.7 × 3) / (0.7 × 0.7 + 0.3 × 0.3 + 0.42)", options: ["1", "1/3", "-⅓", "3"] },
  { question: "Find the quartile deviation of the observations 16, 2, 8, 24, 4, 32, 18.", options: ["8", "12", "6", "10"] },
  { question: "Convert the following Infix to Postfix expression: W+x*y+(z*a)", options: ["Wxy+*za*+", "Wxy*+(za)*+", "Wxy*+za*+", "W+xy*za"] },
  { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"] }
];
const faqs = [
    {
      question: "What are the most important aptitude topics for placements?",
      answer: `The most important aptitude topics for placements are categorized into:
      - Quantitative Aptitude (Percentages, Profit & Loss, Time & Work, etc.)
      - Logical Reasoning (Puzzles, Blood Relations, Seating Arrangement, etc.)
      - Verbal Ability (Reading Comprehension, Synonyms & Antonyms, Grammar, etc.)`
    },
    {
      question: "How do I prepare for aptitude tests for placements?",
      answer: `Start with the basics of each topic and gradually move to advanced problems. 
      You can check out [this page](#) to begin your preparation. Practice regularly and take mock tests.`
    },
    {
      question: "Is aptitude necessary for placements?",
      answer: `Yes, aptitude is a crucial part of placement exams. It is usually the first elimination round 
      in most companies' recruitment process.`
    }
  ];

export default function AptitudeMockTest() {
  const [timeLeft, setTimeLeft] = useState(60 * 24); // 24 minutes timer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswer = (index) => {
    setAnswers({ ...answers, [currentQuestion]: index });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side: Question & Options */}
      <div className="w-3/4 bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold">Question {currentQuestion + 1}</h2>
        <p className="mt-2 text-gray-700">{questions[currentQuestion].question}</p>
        
        {/* Options */}
        <div className="mt-4 space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="block p-2 border rounded cursor-pointer hover:bg-gray-200">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={answers[currentQuestion] === index}
                onChange={() => handleAnswer(index)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Clear Response</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Mark for Review & Next</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1))}>Save & Next</button>
        </div>
      </div>

      {/* Right Side: Timer, Profile & Navigation */}
      <div className="w-1/4 bg-gray-200 p-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Time Left: {formatTime(timeLeft)}</span>
          <button className="text-red-600">Pause Test</button>
        </div>
        
        {/* Question Navigation */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {questions.map((_, i) => (
            <button key={i} className="bg-white border p-2 rounded text-sm hover:bg-gray-300" onClick={() => setCurrentQuestion(i)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}