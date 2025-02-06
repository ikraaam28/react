import { useState } from "react";

function GestionnaireNotes({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const ajouterNote = () => {
    const note = parseFloat(newNote);
    if (note >= 0 && note <= 20) {
      setNotes([...notes, note]);
      setNewNote("");
    } else {
      alert("Note invalide (0-20) !");
    }
  };

  const supprimerNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const moyenne = notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : "N/A";

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Gestionnaire de Notes</h2>
      <input type="number" value={newNote} onChange={(e) => setNewNote(e.target.value)}  style={{ backgroundColor: "white" , color: "black"}} />
      <button onClick={ajouterNote} style={{ backgroundColor: "white" , color: "black"}}>Ajouter</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => supprimerNote(index)} style={{ backgroundColor: "white" , color: "red"}}>Supprimer</button>
          </li>
        ))}
      </ul>

      <h3>Moyenne: {moyenne}</h3>
    </div>
  );
}

export default GestionnaireNotes;
