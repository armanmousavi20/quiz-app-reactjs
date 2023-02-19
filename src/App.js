import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What command is used to start the React local development server?",
      answers: [
        {
          text: "npm run",
          correct: false,
        },
        {
          text: "npm build",
          correct: false,
        },
        {
          text: "npm run dev",
          correct: false,
        },
        {
          text: "npm start",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2007",
          correct: false,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2004",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "What is the default local host port that a React development server uses?",
      answers: [
        {
          text: "8000",
          correct: false,
        },
        {
          text: "1000",
          correct: false,
        },
        {
          text: "5000",
          correct: false,
        },
        {
          text: "3000",
          correct: true,
        },
      ],
    },
	    {
      id: 4,
      question: "Which keyword creates a constant in JavaScript?",
      answers: [
        {
          text: "let",
          correct: false,
        },
        {
          text: "var",
          correct: false,
        },
        {
          text: "int",
          correct: false,
        },
        {
          text: "const",
          correct: true,
        },
      ],
    },
	    {
      id: 5,
      question: "Which operator can be used to conditionally render a React component??",
      answers: [
        {
          text: "||",
          correct: false,
        },
        {
          text: "::",
          correct: false,
        },
        {
          text: "??",
          correct: false,
        },
        {
          text: "&&",
          correct: true,
        },
      ],
    },
	    {
      id: 6,
    question:"When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      answers: [
        {
          text: "id",
          correct: false,
        },
        {
          text: "index",
          correct: false,
        },
        {
          text: "data",
          correct: false,
        },
        {
          text: "key",
          correct: true,
        },
      ],
    },
	    {
      id: 7,
      question: "What tool does React use to compile JSX?",
      answers: [
        {
          text: "JSX Compiler",
          correct: false,
        },
        {
          text: "React Router",
          correct: false,
        },
        {
          text: "React Dom",
          correct: false,
        },
        {
          text: "Babel",
          correct: true,
        },
      ],
    },
	    {
      id: 8,
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        {
          text: "<js>",
          correct: false,
        },
        {
          text: "<scripting>",
          correct: false,
        },
        {
          text: "<scr>",
          correct: false,
        },
        {
          text: "<script>",
          correct: true,
        },
      ],
    },
	    {
      id: 9,
      question: "Where is the correct place to insert a JavaScript?",
      answers: [
        {
          text: "<head>",
          correct: false,
        },
        {
          text: "<body>",
          correct: false,
        },
        {
          text: "any",
          correct: false,
        },
        {
          text: "<head>,<body>",
          correct: true,
        },
      ],
    },
	    {
      id: 10,
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      answers: [
        {
          text: "<script her='xxx.js'>",
          correct: false,
        },
        {
          text: "<script to='xxx.js'>",
          correct: false,
        },
        {
          text: "5000",
          correct: "<script name='xxx.js'>",
        },
        {
          text: "<script src='xxx.js'>",
          correct: true,
        },
      ],
    },
	    {
      id: 11,
      question: "How do you create a function in JavaScript?",
      answers: [
        {
          text: "function = myfunction()",
          correct: false,
        },
        {
          text: "myfunction()",
          correct: false,
        },
        {
          text: "function : myfunction()",
          correct: false,
        },
        {
          text: "function myfunction()",
          correct: true,
        },
      ],
    },
	    {
      id: 12,
      question: "How do you call a function named 'myFunction'?",
      answers: [
        {
          text: "functin myFunction()",
          correct: false,
        },
        {
          text: "call myFunction()",
          correct: false,
        },
        {
          text: "myFunction",
          correct: false,
        },
        {
          text: "myFunction()",
          correct: true,
        },
      ],
    },
	    {
      id: 13,
      question: "How to write an IF statement in JavaScript?",
      answers: [
        {
          text: "if i==5",
          correct: false,
        },
        {
          text: "if(i=5)",
          correct: false,
        },
        {
          text: "if i=5",
          correct: false,
        },
        {
          text: "if(i === 5)",
          correct: true,
        },
      ],
    },
	    {
      id: 14,
      question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      answers: [
        {
          text: "if i<>5",
          correct: false,
        },
        {
          text: "if i =! 5",
          correct: false,
        },
        {
          text: "if(i<>5) ",
          correct: false,
        },
        {
          text: "if(i != 5)",
          correct: true,
        },
      ],
    },
	    {
      id: 15,
      question: "How do you find the number with the highest value of x and y?",
      answers: [
        {
          text: "top(x,y)",
          correct: false,
        },
        {
          text: "ceil(x,y)",
          correct: false,
        },
        {
          text: "floor(x,y)",
          correct: false,
        },
        {
          text: "Math.max(x,y)",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || questionNumber > 15 ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
		  
			
		  
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
