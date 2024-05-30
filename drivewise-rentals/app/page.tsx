import Image from "next/image";
import { Hero } from '@/components'
import { SearchBar, CustomFilter, CarCard } from '@/components';
import fetchCars from '@/utils';

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <Catalogue /> */}
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar/> 
          <div className='home__filter-container'>
            <CustomFilter title='fuel'/>
            <CustomFilter title='fuel'/>
          </div>
        </div>
      </div>


      {!isDataEmpty ? (
        <section className='padding-x max-width'>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => <CarCard car={car}/> )}
          </div>
        </section>
      ): (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, We don't have cars</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </main>
  );
}
