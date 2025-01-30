// calculateScores.js
export const calculateTotalScore = (students) => {
    // Ajouter un bonus de 15 points aux élèves ayant une note inférieure à 50
    const adjustedScores = students.map(student => {
      if (student.score < 50) {
        return { ...student, score: student.score + 15 };
      }
      return student;
    });
  
    // Filtrer les étudiants ayant une note supérieure à 50
    const studentsAbove50 = adjustedScores.filter(student => student.score > 50);
  
    // Calculer le total des notes
    return studentsAbove50.reduce((total, student) => total + student.score, 0);
  };
  