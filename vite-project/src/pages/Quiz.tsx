import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import nomes from "../assets/nomes.png";
import logo21 from "../assets/Logo-21.png";
import logo1 from "../assets/Logo1.png";

export const quizData = [
  {
    id: 1,
    question: "Quem escreveu 'Dom Casmurro'?",
    options: [
      "Machado de Assis",
      "José de Alencar",
      "Clarice Lispector",
      "Graciliano Ramos"
    ],
    answer: "Machado de Assis"
  },
  {
    id: 2,
    question: "Qual a capital do Piauí?",
    options: ["Parnaíba", "Teresina", "Picos", "Piripiri"],
    answer: "Teresina"
  },
  {
  id: 3,
  question: "Qual é o maior planeta do Sistema Solar?",
  options: ["Terra", "Marte", "Júpiter", "Saturno"],
  answer: "Júpiter"
},

{
  id: 4,
  question: "Quem pintou a Mona Lisa?",
  options: [
    "Pablo Picasso",
    "Leonardo da Vinci",
    "Van Gogh",
    "Michelangelo"
  ],
  answer: "Leonardo da Vinci"
},

{
  id: 5,
  question: "Qual é o oceano mais profundo do mundo?",
  options: [
    "Oceano Atlântico",
    "Oceano Índico",
    "Oceano Pacífico",
    "Oceano Ártico"
  ],
  answer: "Oceano Pacífico"
},

{
  id: 6,
  question: "Qual linguagem é usada para estilizar páginas web?",
  options: ["HTML", "Python", "CSS", "Java"],
  answer: "CSS"
},

{
  id: 7,
  question: "Quantos continentes existem no planeta Terra?",
  options: ["5", "6", "7", "8"],
  answer: "7"
},

{
  id: 8,
  question: "Quem descobriu o Brasil?",
  options: [
    "Pedro Álvares Cabral",
    "Dom Pedro I",
    "Tiradentes",
    "Getúlio Vargas"
  ],
  answer: "Pedro Álvares Cabral"
}
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {

  localStorage.setItem("quizQuestions",JSON.stringify(quizData));
}, []);

  const navigate = useNavigate();


  const [started, setStarted] = useState(false);

  const currentQuiz = quizData[currentStep];

  const handleAnswer = (option: string) => {
  const isCorrect = option === currentQuiz.answer;

  let newScore = score;
  let newErrors = errors;

  if (isCorrect) {
    newScore++;
    setScore(newScore);
    setMessage("✅ CERTO!");
  } else {
    newErrors++;
    setErrors(newErrors);
    setMessage("❌ ERRADO!");
  }

  setTimeout(() => {
    const nextStep = currentStep + 1;

    if (nextStep < quizData.length) {
      setCurrentStep(nextStep);
      setMessage("");
    } else {
      navigate("/resultado", {
        state: {
          finalScore: newScore,
          finalErrors: newErrors
        }
      });
    }
  }, 1000);
};

if (!started) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >

      <img
        src={logo21}
        alt="Logo"
        style={{
          width: "220px",
          marginTop: "-150px",
          marginBottom: "20px",
        }}
      />


      <img
        src={nomes}
        alt="Nomes"
        style={{
          width: "250px",
          marginTop: "-30px",
          marginBottom: "20px",
        }}
      />

      <img
        src={logo1}
        alt="Logo 1"
        style={{
          width: "50px",
          marginTop: "-10px",
          marginBottom: "30px",
        }}
      />

      <button
        onClick={() => setStarted(true)}
        style={{
          padding: "20px 50px",
          borderRadius: "25px",
          border: "none",
          backgroundColor: "#7c3aed",
          color: "white",
          fontSize: "26px",
          fontWeight: "bold",
          marginTop: "-20px",
          cursor: "pointer",
        }}
      >
        COMEÇAR QUIZ
      </button>

    </div>
  );
}

 return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#0c0c0c",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}
  >

    <img
      src={logo21}
      alt="Logo 21"
      style={{
        width: "220px",
        marginBottom: "20px",
      }}
    />

    <div
      style={{
        width: "100%",
        maxWidth: "700px",
      }}
    >

{/* Pergunta */}
        <div
          style={{
            backgroundColor: "white",
            padding: "50px",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            border: "2px solid #fdfdfd",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "black",
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {currentQuiz.question}
          </h2>
        </div>
{/* Opções */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            border: "2px solid #d4cccc",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >

          {currentQuiz.options.map((option, index) => (
            <button 
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                padding: "25px",
                borderRadius: "25px",
                border: "2px solid #f5f4f4",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}

          {message && (
            <h2
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: message.includes("CERTO") ? "green" : "red",
                fontSize: "28px",
              }}
            >
              {message}
            </h2>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Quiz;