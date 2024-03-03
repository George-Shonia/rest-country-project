import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import CountryList from '../components/CountryList'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Search />
        <CountryList />
    </div>
  )
}

export default Home