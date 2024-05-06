import Activities from './Activities';
import Flights from './Flights';
import Hotels from './Hotels';

const TripIteneries = () => {
  return (
    <div className="flex flex-col gap-y-7">
      <div className="">
        <h2 className="text-xl font-semibold text-[#1D2433]">Trip Iteneries</h2>
        <p className="mt-0.5 text-sm">Your trip itineraries are placed here</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Flights />
        <Hotels />
        <Activities />
      </div>
    </div>
  );
};

export default TripIteneries;
