import {useState,useEffect} from "react"
import  axios  from 'axios';
export const useFetch=(url)=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        // Replace 'API_URL' with the actual URL of your API or backend endpoint
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    return {data,error,loading}
} 