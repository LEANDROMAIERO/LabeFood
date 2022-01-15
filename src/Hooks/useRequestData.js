import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
    }) 
  }, [url])

  return (data)
}