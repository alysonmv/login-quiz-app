import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import { Option } from "./Option";
import "./Question.css";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const [userAnswer, setUserAnswer] = useState(null);
  const [checkStatus, setCheckStatus] = useState(false);

  const onSelectOption = (option) => {
    if (quizState.answerSelected || checkStatus) return;
    setUserAnswer(option);
  };

  const checkAnswer = () => {
    if (userAnswer === null || checkStatus) return;
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option: userAnswer },
    });
    setCheckStatus(true);
  };

  const continueToNextQuestion = () => {
    dispatch({ type: "CHANGE_QUESTION" });
    setUserAnswer(null);
    setCheckStatus(false);
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length} / Sua pontuação: {quizState.score}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option) && checkAnswer(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
            selected={userAnswer === option}
            checkStatus={checkStatus}
          />
        ))}
      </div>
      {userAnswer !== null && !checkStatus && (
        <p>Você tem certeza da resposta?</p>
      )}
      {checkStatus && (
        <div>
          <p>
            {userAnswer === currentQuestion.answer
              ? "Você acertou a resposta!"
              : "Você errou a resposta!"}
          </p>
          {userAnswer !== currentQuestion.answer && (
            <p className="correct-answer">Resposta correta: {currentQuestion.answer}</p>
          )}
        </div>

      )}
      <div className="action-buttons">
        {!quizState.answerSelected && !quizState.help && !checkStatus && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
          )}
          <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
        </>
      )}
      </div>
         {!quizState.answerSelected && quizState.help === "tip" && (
        <p>{currentQuestion.tip}</p>
      )}
      <div className="action-buttons">
        {quizState.answerSelected ? (
        <button onClick={continueToNextQuestion}>Continuar</button>
      ) : !checkStatus ? (
        <button onClick={checkAnswer}>Verificar resposta</button>
      ) : (
        <button onClick={continueToNextQuestion}>Continuar</button>
      )}
      
      <button className="start-over" onClick={() => [dispatch({ type: "NEW_GAME" })]}>Retornar para o inicio</button>
    </div>
    </div>
  );
};
