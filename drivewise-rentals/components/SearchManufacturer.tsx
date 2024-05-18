"use client"
import Image from 'next/image'
import { useState, Fragment } from 'react';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants';
import clsx from 'clsx'

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
        {/* <Combobox>
            <div className='relative w-full'>
                <ComboboxButton className='absolute top-[14px]'>
                    <Image 
                        src='/car-logo.svg'
                        alt='Car Logo'
                        width={20}
                        height={20}
                        className='ml-4'
                    />
                </ComboboxButton>
                <ComboboxInput 
                    className='search-manufacturer__input' 
                    placeholder='Volkswagen...'
                    displayValue={(item: string) => item }
                    onChange={(e) => (e.target.value)}
                />
                <Transition 
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery("")}
                >
                    <ComboboxOptions>
                        {filteredManufacturers.length === 0 &&
                        query !== "" ? (
                            <ComboboxOption
                                value={query}
                                className='search-manufacturer__option'
                            >
                                Create '{query}'
                            </ComboboxOption>
                        ): ( filteredManufacturers.map((item) => (
                            <ComboboxOption
                                key={item}
                                className={({ focus }) => `
                                relative search-manufacturer__option
                                ${focus ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                `}
                                value={item}
                            >
                                {item}
                            </ComboboxOption>
                        )))}
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox> */}

        <Combobox value={manufacturer} onChange={setManufacturer} onClose={() => setQuery('')}>
            <div className='relative w-full'>
                <ComboboxButton className='absolute top-[14px]'>
                    <Image 
                        src='/car-logo.svg'
                        alt='Car Logo'
                        width={20}
                        height={20}
                        className='ml-4'
                    />
                </ComboboxButton>
                <ComboboxInput
                    className='search-manufacturer__input'
                    placeholder="Volkswagen"
                    displayValue={(item: string) => item}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <Transition 
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery("")}
                >
                    <ComboboxOptions anchor='bottom' className= 'w-[13.5rem] rounded'>
                        {filteredManufacturers.map((item) => (
                            <ComboboxOption 
                                key={item} 
                                value={item} 
                                className="relative search-manufacturer__option data-[focus]:bg-primary-blue data-[focus]:text-white"
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
