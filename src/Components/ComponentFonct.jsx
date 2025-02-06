import { useState } from "react";
import { Button } from "react-bootstrap";

function ComponentFonct() {
  const [monTexte, setMonTexte] = useState("hello");
  const [value, setValuee] = useState(0);

  const handleClick = () => {
    setValuee(value + 1); // ✅ Correction ici
  };

  return (
    <>
      Ceci est un composant fonctionnel {/* ✅ Correction du texte */}
      <br />
      {monTexte}
      <br />
      <Button variant="primary" onClick={handleClick}> {/* ✅ Appel correct de handleClick */}
        Incrémenter
      </Button>
      <h2>{value}</h2>
    </>
  );
}

export default ComponentFonct;
