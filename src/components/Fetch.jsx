import { useEffect, useState } from 'react';

function Fetch() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
      })

    return () => controller.abort();
  }, []);

  return <h1>{title}</h1>
}

export default Fetch;