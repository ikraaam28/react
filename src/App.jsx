import Button from "./Components/Button.jsx";
import Form from "./Components/Form.jsx";
import Hello from "./Components/Hello.jsx";
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

//   return (
//      
    return (

      <>
       <div className="container">
            <h1 className="text-center font-bold text-3xl text-gray-800 mb-6">Résultats des Fonctions</h1>
            
            {/* Section Mot le Plus Long */}
            <div className="card">
                <div className="card-header">Mot le Plus Long</div>
                <div className="card-content">
                    <p><strong>Mot :</strong> {longest.mot}</p>
                    <p><strong>Longueur :</strong> {longest.longueur}</p>
                </div>
            </div>

            {/* Section Occurrences */}
            <div className="card">
                <div className="card-header">Occurrences des Mots</div>
                <div className="card-content">
                    <pre>{JSON.stringify(occurrences, null, 2)}</pre>
                </div>
            </div>

            {/* Section Total des Scores */}
            <div className="card result-section">
                <div className="card-header">Total des Scores Ajustés</div>
                <div className="card-content">
                    <p>{totalScore}</p>
                </div>
            </div>
            
      </div>
      <Hello />
      <Form labelle="Firstname" namee="Firstname"/>
      <Form labelle="Lastname" namee="Lastname"/>
      <Button />
      </>
    );
}

export default App;
