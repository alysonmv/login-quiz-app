import "./Option.css";

export const Option = ({ option, selectOption, answer, hide, selected, checkStatus }) => {

  const isCorrectAnswer = option === answer;
  const isUserSelected = selected && checkStatus;
  const isWrongAnswer = isUserSelected && !isCorrectAnswer;

  const optionClasses = [
    "option",
    isUserSelected && isCorrectAnswer ? "correct" : "",
    isWrongAnswer ? "wrong" : "",
    hide ? "hide" : ""
  ].join(" ");

  return (
    <div
      id="option"
      onClick={() => selectOption()}
      className={optionClasses}
    >
     <p>{option}</p>
    </div>
  );
};