import { Banner } from '../Banner';
import TripCards from '../TripCards';
import TripInfo from '../TripInfo';
import TripIteneries from '../TripIteneries';

const PlanATrip = () => {
  return (
    <div className="flex flex-col bg-white rounded p-4 lg:p-8">
      <Banner />
      <div className="mt-5">
        <TripInfo />
      </div>
      <div className="mt-5">
        <TripCards />
      </div>
      <div className="mt-[90px] mb-[60px]">
        <TripIteneries />
      </div>
    </div>
  );
};

export default PlanATrip;
