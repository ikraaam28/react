import React from 'react';
import UseStoreStored from '../ZustandStores/UseStoreSrtored';

const Counter = () => {
const {count, increment,
decrement}=UseStoreStored();
return (
<div>
<h1>Count: {count}</h1>
<button
onClick={increment}>Increment</button>
<button
onClick={decrement}>Decrement</button>
</div>
);
};
export default Counter;