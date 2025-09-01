import React, { useState, useEffect } from 'react' 
const useNewApi = (newstype) => {
  const [dataa, setData] = useState([]) 
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${newstype}&apiKey=f92dce6d994642bcaddffd2bd7fe8f47`)
    .then((res)=>res.json())
    .then((data)=> setData(data.articles))    
  }, [newstype])
  return dataa
}
export default useNewApi


// import React, { useState, useEffect } from 'react' 
// const useNewApi = () => {
//   const [dataa, setData] = useState([]) 
//   const [loading, setLoading] = useState(true) 
//   const [error, setError] = useState(null) 
//   useEffect(() => {
//     const fetchNews=async()=>{

//       try{
//         const res=fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f92dce6d994642bcaddffd2bd7fe8f47`)
//         if(!res.ok) throw new Error("Failed to fetch news")
//           const jsondata =await res.json()
//         setData(jsondata.articles||[]) 
//       }catch(err){
//         setError(err.message)
//         setData([])
//       }finally{
//         setLoading(false)
//       }
//     }
//     fetchNews()
//     }, [])
//   console.log(dataa,loading,error)
//   return dataa
// }
// export default useNewApi