import Image from 'next/image';
import { Icon } from './Icon';

const tripInfo = {
  startDate: '21 March 2024',
  endDate: '21 April 2024',
  tripName: 'Bahamas Family Trip',
  tripType: 'Solo Trip',
  location: { city: 'New York', country: 'United States of America' },
};

const TripInfo = () => {
  const { startDate, endDate, tripName, tripType, location } = tripInfo;

  return (
    <>
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-y-1">
          <div className="flex gap-x-1 items-center bg-[#FEF4E6] text-[#7A4504] px-2 py-1 font-medium text-sm w-fit">
            <Icon name="CalendarSmall" className="h-4 w-4" />
            <span className="">{startDate}</span>
            <Icon name="ArrowRight" className="h-4 w-4" />
            <span className="">{endDate}</span>
          </div>

          <h1 className="font-bold text-2xl text-black py-1">{tripName}</h1>
          <div className="flex flow-row gap-x-2 text-primary-400 divide-x-2 divide-slate-400 text-sm">
            <p className="text-[#676E7E]">{`${location.city}, ${location.country}`}</p>
            <p className="pl-2">{tripType}</p>
          </div>
        </div>

        <div className="ml-3 flex flex-col justify-between">
          <div className="flex items-center gap-x-2">
            <div className="hidden md:flex justify-center bg-[#E7F0FF] rounded px-4 py-2 2xl:w-[160px] 2xl:h-[46px]">
              <Icon name="UserPlus" className="w-5 h-5 cursor-pointer" />
            </div>
            <Icon name="DotsThree" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="-mt-8 mr-10 hidden md:flex flex-row justify-end items-center ">
        <Image
          src="/images/pic.svg"
          width={40}
          height={40}
          alt=""
          className="rounded-full"
        />
        <hr className="w-[31px] h-[2px]" />
        <Icon name="Set" className="h-10 w-10" />
      </div>
    </>
  );
};

export default TripInfo;
