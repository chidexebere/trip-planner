import Image from 'next/image';
import { Icon } from './Icon';
import { formatToNaira } from '@/helper';

const Hotels = () => {
  return (
    <div className="mt-7">
      <div className="">
        <div className="bg-primary-100 p-4 border-b 0">
          <div className=" flex flex-row justify-between">
            <div className="flex flex-row gap-2 mt-2">
              <Icon name="House" className="h-6 w-6" />
              <p className="text-white">Flights</p>
            </div>

            <div className="bg-white text-black rounded px-5 py-2 text-center cursor-pointer">
              Add Hotels
            </div>
          </div>

          <div className="flex flex-row mt-5 ">
            <div className="bg-white p-5 w-full">
              <div className="flex flex-row gap-3">
                <div className="relative flex justify-center items-center">
                  <div>
                    <Image
                      src="/assets/images/building.jpg"
                      width={250}
                      height={250}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 flex space-x-40">
                    <Icon name="CaretCircleRight" className="h-6 w-6" />
                    <Icon name="CaretCircleLeft" className="h-6 w-6" />
                  </div>
                  <div></div>
                </div>
                <div>
                  <div>
                    <div className="flex flex-row justify-between border-b  pb-4">
                      <div>
                        <h1 className="text-2xl font-bol">
                          Riviera Resort, Lekki
                        </h1>
                        <p className="w-[400px] text-xs font-bold">
                          18, Kenneth Agbakuru Street, Off Access Bank Admiralty
                          Way, Lekki Phase1
                        </p>
                        <div className="flex gap-3 mt-3">
                          <div className="flex flex-row iems-center">
                            <Icon name="MapPin" className="h-7 w-7" />
                            <p className="text-xs  text-primary-50 font-bold">
                              Show in map
                            </p>
                          </div>
                          <div className="flex flex-row iems-center">
                            <Icon name="Star" className="h-7 w-7 " />
                            <p className="text-xs ">8.5(436)</p>
                          </div>
                          <div className="flex flex-row iems-center">
                            <Icon name="Bed" className="h-7 w-7 " />
                            <p className="text-xs ">King Size</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 ml-32">
                        <h1 className=" font-bold text-2xl">
                          {formatToNaira(123450)}
                        </h1>
                        <p>Total Price NGN 560,000</p>
                        <p>1 room x 10 nights incl.tazes</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-row justify-between border-b  pb-4 mt-3">
                      <div>
                        <div className="flex gap-3 mt-3">
                          <p className="text-xs  text-primary-50 font-bold">
                            Facilities :
                          </p>
                          <div className="flex flex-row iems-center">
                            <Icon name="Pool" className="h-7 w-7 " />
                            <p className="text-xs ">Pool</p>
                          </div>
                          <div className="flex flex-row iems-center">
                            <Icon name="Bar" className="h-7 w-7 " />
                            <p className="text-xs ">Bar</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-3">
                        <div className="flex flex-row iems-center">
                          <Icon name="Calendar" className="h-7 w-7 " />
                          <p className="text-xs ">Check In: 20-04-2024</p>
                        </div>
                        <div className="flex flex-row iems-center">
                          <Icon name="Calendar" className="h-7 w-7 " />
                          <p className="text-xs ">Check Out: 29-04-2024</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <div className="flex flex-row gap-5 mt-5">
                        <h3 className="text-primary-50 font-bold cursor-pointer">
                          Hotel details
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

export default Hotels;
