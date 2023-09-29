import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(endPoint); // Corregido endpoint
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return data;
};

export default useFetch;
