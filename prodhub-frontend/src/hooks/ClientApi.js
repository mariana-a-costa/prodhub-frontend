import { useState, useEffect } from 'react';
import axios from 'axios';

const useClientApi = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/client-view/all'); 
        console.log(response.data);
        setClients(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return { clients, loading, error };
};

export default useClientApi;
