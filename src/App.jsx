import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [ isloading,setIsLoading ] = useState(true)
  const [ tours,setTours ] = useState([])


  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try{
       const response = await fetch(url) 
       const tours = await response.json()
       setTours(tours)
       
    }catch(error){
      console.log(error);
      
    }
    setIsLoading(false)
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
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  )
};
export default App;
