import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"; 
import { Link } from "react-router-dom";



function CountriesList() {
  //agarrando la informacón de la API
  const [ listOfCountries, setListOfCountries ] = useState([])
 
  const getCountries = async () => {
    const response = await axios.get ("https://ih-countries-api.herokuapp.com/countries")
    //console.log(response)
    //console.log(response.data.results)
    setListOfCountries(response.data)
  }
  useEffect(() => {

    getCountries()
  },[])


  return (
    <div>
      <h3>List of Countries</h3>

      { listOfCountries.map ((eachCountry, index) => {
        return (
          <div key={ index + eachCountry} >

          <Link to = { `/${eachCountry.alpha3Code}` }>{eachCountry.name.official}</Link>

          <br />
          <br />

          </div>
        
        )
      })
      }


    </div>
  )
}

export default CountriesList