import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../user_authentication/src/hooks/useAuth";

import "./Welcome.css";


export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" }) + console.log(quizState)}>
        Iniciar
      </button>
      <button onClick={() => [signout(), navigate("/")]}>Sair</button>
    </div>
  );
};