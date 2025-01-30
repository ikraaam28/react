// findLongestWord.js

const findLongestWord = (words) => {
    // Décomposition du tableau de mots
    let [firstWord, ...restOfWords] = words;
  
    // Utilisation de .map() pour créer un tableau d'objets avec 'mot' et 'longueur'
    const wordObjects = words.map(word => ({
      mot: word,
      longueur: word.length
    }));
  
    // Utilisation de .reduce() pour trouver l'objet avec la plus grande 'longueur'
    const longestWord = wordObjects.reduce((longest, current) => 
      current.longueur > longest.longueur ? current : longest
    );
  
    return longestWord;
  };
  
  export default findLongestWord;
  