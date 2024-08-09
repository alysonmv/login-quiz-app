import { useContext } from "react";

import { QuizContext } from "../context/quiz";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../user_authentication/src/hooks/useAuth";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { signout } = useAuth();
  const navigate = useNavigate();


  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      <br />
      <button onClick={() => [signout(), navigate("/"), dispatch({ type: "NEW_GAME" })]}>Sair</button>
    </div>
  );
};
