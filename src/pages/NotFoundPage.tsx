import { useNavigate } from "react-router-dom";
export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="content">
      <header>
        <button onClick={handleGoBack}>Back</button>
      </header>
      <h2>This page does not exist</h2>
    </div>
  );
};
