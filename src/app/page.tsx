'use client';

import PlanATrip from '@/components/planATrip';
import { TripContextProvider } from '@/contexts/TripContextProvider';

export default function Home() {
  return (
    <TripContextProvider>
      <PlanATrip />
    </TripContextProvider>
  );
}
