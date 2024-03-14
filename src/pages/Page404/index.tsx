import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Page404 = () => {
  const goTo = useNavigate();
  return (
    <div>
      <h2>Página não encontrada</h2>
      <Button onClick={() => goTo("/")}>Volte a home</Button>
    </div>
  );
};

export default Page404;
