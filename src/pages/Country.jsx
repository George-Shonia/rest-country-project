import CountryDetails from "../components/CountryDetails"
import Navbar from "../components/Navbar"


const Country = ({darkMode,  onDarkModeClick }) => {
  return (
    <div>
      <Navbar onClick={onDarkModeClick} darkMode={darkMode}/>
      <CountryDetails darkMode={darkMode}/>
    </div>
  )
}

export default Country