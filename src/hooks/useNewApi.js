import React, { useState, useEffect } from 'react' 
const useNewApi = (newstype) => {
  const [dataa, setData] = useState([]) 
  useEffect(() => {
    // fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${newstype}&apiKey=f92dce6d994642bcaddffd2bd7fe8f47`)
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${newstype}&apiKey=f92dce6d994642bcaddffd2bd7fe8f47`)
    .then((res)=>res.json())
    .then((data)=> setData(data.articles))    
  }, [newstype])
  return dataa
}
export default useNewApi