import React, { useEffect, useState } from 'react'
import './style.css'
import { CONSOLE_LOG } from '../constants'

export default function SearchBar({onValueChange}) {
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(()=>{
        CONSOLE_LOG("Search Term--->", searchTerm)
        onValueChange(searchTerm)
    },[searchTerm])
  return (
    <>
    <input type="text" placeholder='Search' onChange={(e)=>setSearchTerm(e.target.value)} />
    </>
  )
}
