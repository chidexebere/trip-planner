'use client';

import { useTripStateContext } from '@/contexts/TripContextProvider';
import {
  formatToNairaWithCurrency,
  formatToNairaWithCurrencyShortcode,
} from '@/helper';
import { hotels } from '@/helper/data';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from './Icon';
import { Modal } from './Modal';

const Hotels = () => {
  const { openHotelModal, setOpenHotelModal } = useTripStateContext();
  const [displayedHotel, setDisplayedHotel] = useState<Hotel[]>([]);
  const [availableHotel, setAvailableHotel] = useState<Hotel[]>(hotels);

  const toggleModal = () => {
    setOpenHotelModal(!openHotelModal);
  };

  const addHotels = (selectedId: number) => {
    const selectedHotel = availableHotel.find(
      (hotel) => hotel.id === selectedId
    ) as Hotel;

    setDisplayedHotel([...displayedHotel, selectedHotel]);

    const filteredAvailableHotel = availableHotel.filter(
      (hotel) => hotel.id !== selectedHotel.id
    );
    setAvailableHotel(filteredAvailableHotel);
    toggleModal();
  };

  const deleteHotels = (selectedId: number) => {
    const deletedHotel = displayedHotel.find(
      (hotel) => hotel.id === selectedId
    ) as Hotel;
    const filteredHotel = displayedHotel.filter(
      (hotel) => hotel.id !== selectedId
    );
    setAvailableHotel([...availableHotel, deletedHotel]);
    setDisplayedHotel(filteredHotel);
  };

  return (
    <div className="bg-[#344054] px-6 pt-6 pb-[52px] flex flex-col gap-y-6 rounded">
      <div className=" flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-2.5">
          <Icon name="Hotels2" className="h-6 w-6" />
          <p className="text-white font-semibold text-lg">Hotels</p>
        </div>
        {displayedHotel.length > 0 && (
          <button
            className="max-w-[153px] font-semibold text-center rounded text-sm py-3 px-6 text-[#1D2433] bg-white"
            onClick={toggleModal}
          >
            Add Hotels
          </button>
        )}
      </div>

      {displayedHotel.length === 0 ? (
        <div className="grid place-items-center bg-white pl-5 py-5 w-full h-40">
          <button
            className="max-w-[153px]  text-center rounded text-sm py-3 px-6 bg-[#0054E4] text-white"
            onClick={toggleModal}
          >
            Add Hotels
          </button>
        </div>
      ) : (
        <>
          {displayedHotel.map((hotel) => (
            <div
              key={hotel.id}
              className="flex justify-between overflow-x-auto rounded"
            >
              <div className="bg-white pl-5 py-5 w-full">
                <div className="flex flex-col xl:flex-row items-center">
                  <div className="relative">
                    <Image
                      src="/images/hotel1.svg"
                      width={232}
                      height={224}
                      alt="hotel"
                      className="rounded"
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between p-3 w-full">
                      <Icon name="CaretCircleLeft" className="h-8 w-8" />
                      <Icon name="CaretCircleRight" className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="w-full divide-y">
                    <div className="pl-4 flex flex-col lg:flex-row justify-between pr-[42px]">
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-1.5 pb-[18px]">
                        <h3 className="text-[#1D2433] font-semibold text-xl">
                          {hotel.place}
                        </h3>
                        <p className="text-[#1D2433] font-medium">
                          {hotel.address}
                        </p>
                        <div className="flex  items-center gap-3 text-[#676E7E] font-medium">
                          <div className="flex items-center gap-x-1">
                            <Icon name="MapPin" className="h-[18px] w-[18px]" />
                            <p className="text-[#0D6EFD]">Show in map</p>
                          </div>
                          <div className="flex items-center gap-x-1">
                            <Icon name="Star" className="h-[18px] w-[18px]" />
                            <p className="">8.5(436)</p>
                          </div>
                          <div className="flex items-center gap-x-1">
                            <Icon name="Bed" className="h-[18px] w-[18px]" />
                            <p className="">King Size</p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-y-1 font-medium text-[#1D2433]">
                        <h3 className="font-semibold text-2xl">
                          {formatToNairaWithCurrency(hotel.amount)}
                        </h3>
                        <p>
                          Total Price:{' '}
                          {formatToNairaWithCurrencyShortcode(hotel.total)}
                        </p>
                        <p>1 room x 10 nights incl.tazes</p>
                      </div>
                    </div>

                    <div className="pl-4 py-3.5 flex flex-col lg:flex-row justify-between pr-[42px] font-medium text-[18px] text-[#647995]">
                      <div className="flex flex-col md:flex-row gap-x-3">
                        <p className="">Facilities :</p>
                        <div className="flex gap-x-3 items-center">
                          <Icon name="Pool" className="h-5 w-5 " />
                          <p className="">Pool</p>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <Icon name="Bar" className="h-5 w-5 " />
                          <p className="">Bar</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-x-3">
                        <div className="flex gap-x-1.5 items-center">
                          <Icon name="Calendar" className="h-5 w-5 " />
                          <p className="">Check In: {hotel.checkin}</p>
                        </div>
                        <div className="flex gap-x-1.5 items-center">
                          <Icon name="Calendar" className="h-5 w-5 " />
                          <p className="">Check Out: {hotel.checkout}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pl-4 pt-2 pr-[42px] flex flex-nowrap justify-between items-center text-lg text-[#0D6EFD] font-medium">
                      <div className="flex flex-row item-center gap-x-5 ">
                        <p className="cursor-pointer">Hotel details</p>
                        <p className="cursor-pointer">Price details</p>
                      </div>
                      <p className="cursor-pointer">Edit details</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#FBEAE9] px-3 flex flex-col justify-center w-fit cursor-pointer"
                onClick={() => deleteHotels(hotel.id)}
              >
                <Icon name="Close" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </>
      )}
      {openHotelModal && (
        <Modal title="Select Hotel" toggleModal={toggleModal}>
          {availableHotel.length === 0 ? (
            <p className="flex justify-center items-center p-5">
              You have selected all available hotel
            </p>
          ) : (
            <div className="flex flex-col gap-y-2 p-5">
              {availableHotel.map((hotel) => (
                <div
                  key={hotel.id}
                  className="flex justify-between items-center hover:bg-[#0D6EFD] hover:text-white cursor-pointer p-3"
                  onClick={() => addHotels(hotel.id)}
                >
                  <span>{hotel.place}</span>
                  <span>{formatToNairaWithCurrencyShortcode(hotel.total)}</span>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Hotels;
