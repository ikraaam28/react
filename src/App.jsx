import ComponentClass from "./Components/ComponentClass.jsx";
import ComponentFonct from "./Components/ComponentFonct.jsx";
import Counter from "./Components/Counter.jsx";

import Form from "./Components/Form.jsx";
import GestionnaireNotes from "./Components/GestionnaireNotes.jsx";
import Hello from "./Components/Hello.jsx";
import Timer from "./Components/Timer.jsx";
import TodoList from "./Components/TodoList.jsx";
import Events from "./Components/atelier2/Events.jsx";
import Products from "./Components/atelier2/Products.jsx";
import Ccounter from "./Components/useCounter.jsx";
import { findLongestWord, countOccurrences, calculateTotalScore,Search } from "./EcmaScript/functions.js";
import './app.css';

function App() {
  const words = ["JavaScript", "ECMAScript", "React", "Node"];
  const longest = findLongestWord(words);
console.log( findLongestWord(words));
  const data = [["apple", "banana"], ["banana", "apple", "orange"], ["banana", "apple"]];
  const occurrences = countOccurrences(data);

  const scores = [40, 60, 30, 80, 90, 45];
  const totalScore = calculateTotalScore(scores);
  const initialTasks = [
    { name: "Faire les courses", priority: "Haute", completed: false },
    { name: "Nettoyer la maison", priority: "Moyenne", completed: true },
    { name: "Envoyer des emails", priority: "Basse", completed: false },
  ];
//   return (
//      
    return (

      <>
       <div className="container" >
       {/* <h1 className="text-center font-bold text-3xl text-gray-800 mb-6">Résultats des Fonctions</h1>
             */}
            {/* Section Mot le Plus Long */}
            {/* <div className="card">
                <div className="card-header">Mot le Plus Long</div>
                <div className="card-content">
                    <p><strong>Mot :</strong> {longest.mot}</p>
                    <p><strong>Longueur :</strong> {longest.longueur}</p>
                </div>
            </div> */}

            {/* Section Occurrences */}
            {/* <div className="card">
                <div className="card-header">Occurrences des Mots</div>
                <div className="card-content">
                    <pre>{JSON.stringify(occurrences, null, 2)}</pre>
                </div>
            </div> */}

            {/* Section Total des Scores */}
            {/* <div className="card result-section">
                <div className="card-header">Total des Scores Ajustés</div>
                <div className="card-content">
                    <p>{totalScore}</p>
                </div>
            </div> */}
            
      </div>
      {/* <Hello />
      <Form labelle="Firstname" namee="Firstname"/>
      <Form labelle="Lastname" namee="Lastname"/>
  
      <ComponentClass/>
      <ComponentFonct/>
      <Counter/>
      <Timer/>
      <Ccounter/> */}
      {/* <GestionnaireNotes initialNotes={[12, 15, 9, 18]} />
      <TodoList initialTasks={initialTasks} /> */}
    
      <Products/>
      </>
    );
}

export default App;
