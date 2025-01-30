// Fonction 1 : Trouver le mot le plus long
export const findLongestWord = (words) => {
    const wordObjects = words.map(word => ({
        mot: word,
        longueur: word.length
    }));

    return wordObjects.reduce((longest, current) => 
        current.longueur > longest.longueur ? current : longest
    );
};

// Fonction 2 : Compter les occurrences des éléments d'un tableau
export const countOccurrences = (arrays) => {
    return arrays.flat().reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
};

// Fonction 3 : Calculer le total des notes après ajustement
export const calculateTotalScore = (scores) => {
    return scores
        .map(score => score < 50 ? score + 15 : score)  // Ajouter 15 si < 50
        .filter(score => score > 50)  // Filtrer ceux > 50
        .reduce((total, score) => total + score, 0); // Additionner
};
