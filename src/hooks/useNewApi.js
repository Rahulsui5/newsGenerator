import React, { useState, useEffect } from 'react' 
const useNewApi = (newstype) => {
  const [dataa, setData] = useState([]) 
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${newstype}&apiKey=${import.meta.env.VITE_API_URL}`)
    .then((res)=>res.json())
    .then((data)=> setData(data.articles))    
  }, [newstype])
  return dataa
}
export default useNewApi