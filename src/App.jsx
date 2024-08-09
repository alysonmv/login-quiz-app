import { useContext, useState } from "react";
import { QuizContext } from "./context/quiz";

import { AuthContext } from "./user_authentication/src/contexts/auth";
import { Welcome  }from "./components/Welcome";
import { Question } from "./components/Question";
import { GameOver } from "./components/GameOver";
import { Login } from "./user_authentication/src/login";

import { PickCategory}  from "./components/PickCategory";

import "./App.css";

export function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  const { signed } = useContext(AuthContext);

  const startQuiz = () => {
    dispatch({ type: "CHANGE_STAGE" });
  }
  if(!signed){
    return <Login />
  }
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}