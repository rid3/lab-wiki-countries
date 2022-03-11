import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';



function App() {



  return (
    <div className="App">

    <Navbar />

    <br />
    <br />
    <CountriesList />

    <Routes>

    <Route path="/:alpha3Code" element={ <CountryDetails/>} />

    </Routes>





    </div>
  );
}

export default App;
