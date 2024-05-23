import Image from "next/image";
import { Hero } from '@/components'
import { Catalogue, CarCard } from '@/components';
import fetchCars from '@/utils';

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />

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
