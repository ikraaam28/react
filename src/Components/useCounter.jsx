import { useState } from 'react';
 
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
 
  return { count, increment, decrement };
}
 
function Ccounter() {
  const { count, increment, decrement } = useCounter(5);
 
  return (
    <div>
      <p>Valeur du compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}
 
export default Ccounter;