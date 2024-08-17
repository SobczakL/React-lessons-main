import React, { useState, useEffect } from 'react';

export default function EffectFetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userReady, setUserReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (userReady) {
    setError(false)
      fetchData();
    }

    return () => {
      setData(null)
    };
  }, [userReady]);

  const handleUserReady = () => setUserReady(!userReady);

  if (loading){
    return(
        <div>
            <p>Loading...</p>
            <button onClick={handleUserReady}>Ready?</button>
        </div>
    )
  }

  if (error){
    return(
        <div>
            <p>Error: {error}</p>
            <button onClick={handleUserReady}>Ready?</button>
        </div>
    )
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleUserReady}>Ready?</button>
    </div>
  );
}