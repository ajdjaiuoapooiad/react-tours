import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [ isloading,setIsLoading ] = useState(true)
  const [ tours,setTours ] = useState([])

  const fetchData = async () => {
    setIsLoading(false)
    try{
       const response = await fetch(url) 
       const tours = await response.json()
       console.log(tours);
       
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  if(isloading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
};
export default App;
