import { useContext } from "react";

import { QuizContext } from "../context/quiz";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../user_authentication/src/hooks/useAuth";


import "./PickCategory.css";

export const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { signout } = useAuth();
  const navigate = useNavigate();

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes ao mundo da programação, escolha uma das opções:</p>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}
      <button onClick={() => [signout(), navigate("/"), dispatch({ type: "NEW_GAME" })]}>Sair</button>
    </div>
  );
};
