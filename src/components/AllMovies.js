import React, { useState } from 'react'
import MoviesCard from './MoviesCard'
import SearchBar from './SearchBar'

export default function AllMovies() {
    const [searchTerm, setSearchTerm] = useState()
    const handleSearchterm = (value) => {
        setSearchTerm(value)
    }
  return (
    <>
        <SearchBar onValueChange={handleSearchterm} />
        <MoviesCard searchTerm={searchTerm} /> 
    </>
  )
}
