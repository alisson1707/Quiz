import { useLocation, useNavigate } from "react-router-dom";

const Resultado = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const finalScore = location.state?.finalScore || 0;
  const finalErrors = location.state?.finalErrors || 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          color: "#7c3aed",
          marginBottom: "30px",
        }}
      >
        RESULTADO
      </h1>

      <h2 style={{ color: "green", fontSize: "35px" }}>
        ✅ Acertos: {finalScore}
      </h2>

      <h2
        style={{
          color: "red",
          fontSize: "35px",
          marginTop: "20px",
        }}
      >
        ❌ Erros: {finalErrors}
      </h2>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "40px",
          padding: "20px 40px",
          borderRadius: "20px",
          border: "none",
          backgroundColor: "#7c3aed",
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Jogar Novamente
      </button>
    </div>
  );
};

export default Resultado;