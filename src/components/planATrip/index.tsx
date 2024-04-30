import Activities from '../Activities';
import Cards from '../Cards';
import Flights from '../Flights';
import Hotels from '../Hotels';
import { Icon } from '../Icon';
import TripInfo from '../TripInfo';

const PlanATrip = () => {
  return (
    <div className=" flex-grow  bg-white p-4">
      <div className="mt-2 bg-banner p-4 bg-cover bg-center bg-no-repeat h-48">
        <div className="bg-secondary-300 rounded max-w-max max-h-max opacity-60 p-2">
          <Icon name="ArrowLeft" className="w-6 h-6" />
        </div>
      </div>

      <TripInfo
        startDate={'21 March 2024'}
        endDate={'21 April 2024'}
        nameOfTrip={'Bahamas Family Trip'}
        country={'New York, Unied Staes pf America'}
        typeOfTrip={'Solo Trip'}
      />

      <Cards />

      <div className="mt-8">
        <h1>Trip Iteneries</h1>
        <p className="text-primary-400">
          Your trip itineraries are placed here
        </p>
        <Flights />
      </div>

      <div className="mt-8">
        <Hotels />
      </div>

      <div className="mt-8">
        <Activities />
      </div>
    </div>
  );
};

export default PlanATrip;
