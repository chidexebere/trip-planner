import React from 'react';
import Image from 'next/image';
import { Icon } from './Icon';
import { formatToNaira } from '@/helper';

const Flights = () => {
  return (
    <div className="mt-7">
      <div className="">
        <div className="bg-secondary-300 p-4 border-b 0">
          <div className=" flex flex-row justify-between">
            <div className="flex flex-row gap-2 mt-2">
              <Icon name="AirplaneInFlight" className="h-6 w-6" />
              <p>Flights</p>
            </div>

            <div className="bg-white text-primary-50 rounded px-5 py-2 text-center cursor-pointer">
              Add Flights
            </div>
          </div>

          <div className="flex flex-row mt-5 ">
            <div className="bg-white p-5 w-full">
              <div className="flex flex-row">
                <div>
                  <div className="flex flex-row gap-12  border-b  mt-5 pb-5">
                    <div className="flex flex-row gap-2">
                      <Image
                        className="w-[10px] sm:w-[25px] sm:h-[25px] mt-3"
                        src="/assets/images/flight.jpg"
                        width={25}
                        height={25}
                        alt=""
                      />
                      <div>
                        <h1>American Airlines</h1>
                        <div className="flex flex-row gap-2 items-center justify-center">
                          <p className="text-primary-400 xs">AA-B29</p>
                          <span className="font-extrabold text-primary-50 mb-3 ">
                            .
                          </span>
                          <div className="rounded text-white px-3 py-1 bg-primary-100">
                            First Class
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-10">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-center fonnt-bold text-2xl">
                          08:35
                        </h1>
                        <p className="text-primary-400 xs">Sun, 20 Aug</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <Icon name="AirplaneTakeoff" className="h-6 w-6" />
                          <Icon name="AirplaneLanding" className="h-6 w-6 " />
                        </div>

                        <div className="h-3 w-[250px] bg-primary-200 rounded-full flex justify-center">
                          <div className="h-3 w-[70px] bg-primary-50 rounded-full"></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <h1>LOS</h1>
                          <p className="text-primary-400 text-xs text-center">
                            Direct
                          </p>
                          <h1 className="text-right">SIN</h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h1 className="text-center fonnt-bold text-2xl">
                          09:55
                        </h1>
                        <p className="text-primary-400 xs">Sun, 20 Aug</p>
                      </div>
                    </div>

                    <h1 className="mt-5 font-bold text-2xl">
                      {formatToNaira(123450)}
                    </h1>
                  </div>

                  <div className="text-primary-400 flex flex-row gap-3 border-b mt-5 pb-5">
                    <p>Facilities: </p>
                    <div className="flex flex-row iems-center">
                      <Icon name="Baggage" className="h-6 w-6 " />
                      <p className="text-xs mt-1">
                        Baggage:20kg, Cabin Baggage:8kg
                      </p>
                    </div>
                    <div className="flex flex-row iems-center">
                      <Icon name="Entertainment" className="h-6 w-6 " />
                      <p className="text-xs mt-1">in flight entertainment</p>
                    </div>
                    <div className="flex flex-row iems-center">
                      <Icon name="ForkKnife" className="h-6 w-6 " />
                      <p className="text-xs mt-1">In flight meal</p>
                    </div>
                    <div className="flex flex-row iems-center">
                      <Icon name="Usb" className="h-6 w-6 " />
                      <p className="text-xs mt-1">USB Port</p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex flex-row gap-5 mt-5">
                      <h3 className="text-primary-50 font-bold cursor-pointer">
                        Flight details
                      </h3>
                      <h3 className="text-primary-50 font-bold cursor-pointer">
                        Price details
                      </h3>
                    </div>

                    <h3 className="text-primary-50 font-bold cursor-pointer mt-5">
                      Edit details
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-error-100 px-2 ">
              <Icon name="Close" className="w-6  mt-36" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
