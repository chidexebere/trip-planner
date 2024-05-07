'use client';

import { useTripStateContext } from '@/contexts/TripContextProvider';
import { formatToNairaWithCurrency } from '@/helper';
import { flights } from '@/helper/data';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from './Icon';
import { Modal } from './Modal';

const Flights = () => {
  const { openFlightModal, setOpenFlightModal } = useTripStateContext();
  const [displayedFlight, setdisplayedFlight] = useState<Flight[]>([]);
  const [availableFlight, setAvailableFlight] = useState<Flight[]>(flights);

  const toggleModal = () => {
    setOpenFlightModal(!openFlightModal);
  };

  const addFlights = (selectedId: number) => {
    const selectedFlight = availableFlight.find(
      (flight) => flight.id === selectedId
    ) as Flight;

    setdisplayedFlight([...displayedFlight, selectedFlight]);

    const filteredAvailableFlight = availableFlight.filter(
      (flight) => flight.id !== selectedFlight.id
    );
    setAvailableFlight(filteredAvailableFlight);
    toggleModal();
  };

  const deleteFlights = (selectedId: number) => {
    const deletedFlight = displayedFlight.find(
      (flight) => flight.id === selectedId
    ) as Flight;
    const filteredFlight = displayedFlight.filter(
      (flight) => flight.id !== selectedId
    );
    setAvailableFlight([...availableFlight, deletedFlight]);
    setdisplayedFlight(filteredFlight);
  };
  return (
    <div className="bg-[#F0F2F5] px-6 pt-6 pb-[52px] flex flex-col gap-y-6">
      <div className=" flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-2.5">
          <Icon name="AirplaneInFlight" className="h-6 w-6" />
          <p className="text-[#1D2433] font-semibold text-lg">Flights</p>
        </div>

        {displayedFlight.length > 0 && (
          <button
            className="max-w-[153px] font-semibold text-center rounded text-sm py-3 px-6 text-[#0054E4] bg-white"
            onClick={toggleModal}
          >
            Add Flights
          </button>
        )}
      </div>

      {displayedFlight.length === 0 ? (
        <div className="grid place-items-center bg-white pl-5 py-5 w-full h-40">
          <button
            className="max-w-[153px] text-center rounded text-sm py-3 px-6 bg-[#0054E4] text-white"
            onClick={toggleModal}
          >
            Add Flights
          </button>
        </div>
      ) : (
        <>
          {displayedFlight.map((flight) => (
            <div
              key={flight.id}
              className="flex justify-between overflow-x-auto"
            >
              <div className="flex flex-col bg-white divide-y w-full">
                <div className="flex flex-col gap-y-3 lg:flex-row items-start lg:items-center pl-6 py-6 pr-12">
                  <div className="flex flex-row gap-x-[19px]">
                    <Image
                      className=""
                      src={flight.logoUrl}
                      width={24}
                      height={24}
                      alt="logo"
                    />

                    <div className="flex flex-col gap-y-1">
                      <h3 className="text-[#1D2433] font-semibold text-xl">
                        {flight.name}
                      </h3>
                      <div className="flex gap-x-1.5 items-center">
                        <p className="">{flight.airplaceNo}</p>
                        <span className="text-xs">&#8226;</span>
                        <div className="rounded text-white text-xs px-2 py-1 bg-[#0A369D]">
                          First Class
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex justify-start xl:justify-center items-center gap-x-10">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-right font-semibold text-2xl text-[#1D2433]">
                        {flight.takeoffTime}
                      </h3>
                      <p className="font-medium text-sm">{flight.date}</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-y-3  max-w-[387px]">
                      <div className="flex justify-between items-center">
                        <Icon name="AirplaneTakeoff" className="h-5 w-5" />
                        <span className="font-medium">Duration: 1h 45m</span>
                        <Icon name="AirplaneLanding" className="h-5 w-5 " />
                      </div>

                      <div className="h-2 bg-[#E7F0FF] rounded-full flex items-center justify-center">
                        <div className="w-1/3 h-2 bg-[#0D6EFD] rounded-full"></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <p>LOS</p>
                        <p className="text-primary-400 text-xs text-center">
                          Direct
                        </p>
                        <p className="text-right">SIN</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-2xl text-[#1D2433]">
                        {flight.touchDownTime}
                      </h1>
                      <p className="font-medium text-sm">{flight.date}</p>
                    </div>
                  </div>

                  <h3 className="font-semibold text-[#1D2433] text-2xl text-right">
                    {formatToNairaWithCurrency(flight.amount)}
                  </h3>
                </div>

                <div className="text-[#647995] text-lg flex flex-col items-start lg:flex-row lg:items-center gap-3 pl-6 py-6 pr-12">
                  <p>Facilities: </p>
                  <div className="flex items-start lg:items-center gap-x-1.5">
                    <Icon name="Baggage" className="h-5 w-5 " />
                    <p className="">Baggage:20kg, Cabin Baggage:8kg</p>
                  </div>
                  <div className="flex items-start lg:items-center gap-x-1.5">
                    <Icon name="Entertainment" className="h-5 w-5 " />
                    <p className="">in flight entertainment</p>
                  </div>
                  <div className="flex items-start lg:items-center gap-x-1.5">
                    <Icon name="ForkKnife" className="h-5 w-5 " />
                    <p className="">In flight meal</p>
                  </div>
                  <div className="flex items-start lg:items-center gap-x-1.5">
                    <Icon name="Usb" className="h-5 w-5 " />
                    <p className="">USB Port</p>
                  </div>
                </div>

                <div className="flex flex-nowrap justify-between items-center text-lg text-[#0D6EFD] font-medium pl-6 py-6 pr-12">
                  <div className="flex flex-row item-center gap-x-5 ">
                    <p className="cursor-pointer">Flight details</p>
                    <p className="cursor-pointer">Price details</p>
                  </div>
                  <p className="cursor-pointer">Edit details</p>
                </div>
              </div>

              <div
                className="bg-[#FBEAE9] px-3 flex flex-col justify-center w-fit cursor-pointer"
                onClick={() => deleteFlights(flight.id)}
              >
                <Icon name="Close" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </>
      )}

      {openFlightModal && (
        <Modal title="Select Flight" toggleModal={toggleModal}>
          {availableFlight.length === 0 ? (
            <p className="flex justify-center items-center p-5">
              You have selected all available flights
            </p>
          ) : (
            <div className="flex flex-col gap-y-2 p-5">
              {availableFlight.map((flight) => (
                <div
                  key={flight.id}
                  className="flex justify-between items-center hover:bg-[#0D6EFD] hover:text-white cursor-pointer p-3"
                  onClick={() => addFlights(flight.id)}
                >
                  <span>{flight.name}</span>
                  <span>{`${flight.takeoffTime} - ${flight.touchDownTime}`}</span>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Flights;
