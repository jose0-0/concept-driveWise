import { CarProps, FilterProps } from '@/types';
import dotenv from 'dotenv';

dotenv.config();

const fetchCars = async (filters: FilterProps) => {
    const url = process.env.API_BASE_URL ?? '';
    const key = process.env.API_KEY ?? '';
    const host = process.env.API_HOST ?? '';

    const { manufacturer, year, fuel, limit, model} = filters

    const headers = {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': host
    }

    try {
        const response = await fetch(`${url}make=${manufacturer}&year=${year}$model=${model}&limit=${limit}&fuel_type=${fuel}`, {
            headers: headers,
        });
        
        const data = await response.json();

        return data;
        
    } catch (err: any) {
        console.log('Error fetching API: ', err.message);
    }
}

export default fetchCars;

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    console.log(type, value);
  
    searchParams.set(type, value);
  
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };