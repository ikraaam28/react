import { useState } from "react";

function TodoList({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(initialTasks); // Etat des tâches
  const [newTask, setNewTask] = useState(""); // Nom de la nouvelle tâche
  const [newPriority, setNewPriority] = useState("Haute"); // Priorité de la nouvelle tâche
  const [searchQuery, setSearchQuery] = useState(""); // Filtre de recherche
  const [completedCount, setCompletedCount] = useState(0); // Compteur des tâches terminées

  // Ajouter une nouvelle tâche
  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        name: newTask,
        priority: newPriority,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
      setNewPriority("Haute");
    } else {
      alert("Le nom de la tâche ne peut pas être vide.");
    }
  };

  // Marquer une tâche comme terminée
  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    // Met à jour le compteur de tâches terminées
    const completed = updatedTasks.filter((task) => task.completed).length;
    setCompletedCount(completed);
  };

  // Rechercher une tâche
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Todo List avec Priorités</h2>

      {/* Zone de recherche */}
      <input
        type="text"
        placeholder="Rechercher une tâche..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Formulaire pour ajouter une nouvelle tâche */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nom de la tâche"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
        >
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button onClick={addTask}>Ajouter la tâche</button>
      </div>

      {/* Affichage des tâches */}
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name} - {task.priority}
            </span>
            <button onClick={() => toggleCompletion(index)}>
              {task.completed ? "Marquer comme non terminée" : "Marquer comme terminée"}
            </button>
          </li>
        ))}
      </ul>

      {/* Affichage du nombre total de tâches et de tâches terminées */}
      <div>
        <p>
          Total des tâches: {tasks.length} | Tâches terminées: {completedCount}
        </p>
      </div>
    </div>
  );
}

export default TodoList;
