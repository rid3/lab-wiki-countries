import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



function CountryDetails() {

  //se supone que es el elemento dinámico del url que va a hacer que cambie la cosa 
  const { alpha3Code } = useParams();


   //1. crear un estadp 
   const [ detailsCountry, setDetailsCountry ] = useState(null)

   //vuelvo a traer la API
   const getDetails = async () => {
     const response = await axios.get (`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
    // console.log(response.data)
     //guardo la informacón que me trae
     setDetailsCountry(response.data)

   }
   useEffect(() => {
 
     getDetails()
   },[alpha3Code])

   if(!detailsCountry) {
     return <div>...Procesanding</div>
   }


  return (
    <div>

    <h2>{detailsCountry.name.official}</h2>

    </div>
  )
}

export default CountryDetails