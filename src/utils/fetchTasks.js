import { useState, useEffect } from "react";
import axios from "axios";

const useFetchTasks = (url, params, token) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(url, {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [ token]);

  return { tasks, setTasks, loading, error };
};

export default useFetchTasks;
