'use client'
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { CarProps } from "@/types";

interface carDetailProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails = ({isOpen, closeModel, car}: carDetailProps) => {
  return (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModel}>
        <TransitionChild 
          as={Fragment}  
          enter="ease-out duration-300"
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25'/>
        </TransitionChild>
      </Dialog>
    </Transition>
  </>
  )
}

export default CarDetails
