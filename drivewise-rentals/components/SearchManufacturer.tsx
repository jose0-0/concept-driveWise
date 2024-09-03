"use client"
import Image from 'next/image'
import { useState, Fragment } from 'react';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants';

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers = 
        query === "" 
            ? manufacturers 
            : manufacturers.filter((item) => (
                item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
            ))

  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <ComboboxButton className='absolute top-[14px]'>
                    <Image 
                        src='/car-logo.svg' 
                        alt='car logo' 
                        width={20} 
                        height={20} 
                        className='ml-4'
                    />
                </ComboboxButton>
                <ComboboxInput 
                    className='search-manufacturer__input' 
                    placeholder='Volkswagen' 
                    displayValue={(manufacturer: string) => manufacturer} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition 
                    as={Fragment} 
                    leave='transition ease-in duration-100' 
                    leaveFrom='opacity-100' 
                    leaveTo='opacity-0' 
                    afterLeave={() => setQuery('')}
                >
                    {/* TODO: fix the width of the options to be the full width or the search box, not specified */}
                    <ComboboxOptions 
                        anchor="bottom" 
                        className="absolute mt-1 max-h-60 w-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                        {filteredManufacturers.map((item) => (
                            <ComboboxOption 
                                key={item} 
                                value={item} 
                                className="search-manufacturer__option data-[focus]:bg-primary-blue data-[focus]:text-white"
                            >
                                {item}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer
