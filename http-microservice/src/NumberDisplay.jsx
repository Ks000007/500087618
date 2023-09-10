import React, { useState, useEffect } from 'react';
import { getNumbers } from './api/api'; 

function NumberDisplay() {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    async function fetchNumbers() {
      try {
        setLoading(true);
        setError(null);
        const urls = [
          'http://20.244.56.144/numbers/primes',
          'http://20.244.56.144/numbers/fibo',
          'http://20.244.56.144/numbers/odd',
        ];

       
        const response = await getNumbers(urls);

        
        setNumbers(response.numbers);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    
    fetchNumbers();
  }, []);

  return (
    <div>
      <h2>Number Display</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NumberDisplay;