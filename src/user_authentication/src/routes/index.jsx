import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Signin } from "../page/Signin";
import { Signup } from "../page/Signup";
import { App } from "../../../App";
import { QuizProvider } from "../../../context/quiz";

const PrivateRoute = ({ path, element }) => {
  const { signed } = useAuth();

  return signed ? element : <Navigate to="/" />;
};

export const RoutesApp = () => {
  return (
    <QuizProvider>
      <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiz/*" element={<PrivateRoute element={<App />} />} />
      <Route path="*" element={<Signin />} />
    </Routes>
    </QuizProvider>
  );
};
