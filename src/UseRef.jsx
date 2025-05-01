import { useRef } from 'react';

function Counter() {
  // Create a ref to store the count value (this will not trigger a re-render)
  const countRef = useRef(0);

  // Function to handle button click
  const incrementCount = () => {
    countRef.current += 1; // Increment the count (but it won't trigger a re-render)
    console.log(countRef.current); // Log the updated count
  };

  return (
    <div>
      <p>Button clicked: {countRef.current} times</p>
      <button onClick={incrementCount}>Click me!</button>
    </div>
  );
}
export default Counter
