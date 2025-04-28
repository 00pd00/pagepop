import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUserData = (url) => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    axios.get(url)
      .then((response) => {
        setUserData({
          name: response.data.name,
          email: response.data.email,
        });
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user data.');
        setLoading(false);
      });
  }, [url]);

  return { userData, loading, error };
};

export default useFetchUserData;
