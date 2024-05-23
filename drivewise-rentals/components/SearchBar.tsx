"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '@/components';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');

    const handleSubmit = () => {}

  return (
    <form className='searchBar' onSubmit={handleSubmit}>
        <div className='searchbar__item'>
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar
