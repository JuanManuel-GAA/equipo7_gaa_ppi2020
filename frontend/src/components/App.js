import React, { useState } from "react";
import "../style/Loading.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./Loading"

function App() {
  
  const [loading, setLoading] = useState(true);

  const cambiarEstado = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={() => cambiarEstado()}>
          Cargar página
        </button>
      </div>
    );
  }
}
export default App;