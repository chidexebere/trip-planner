type NavType = {
  id: number;
  label: string;
  href: string;
  icon: IconName;
};

type Activity = {
  id: number;
  place: string;
  description: string;
  amount: number;
  schedule: string;
  extras: string;
};

type Hotel = {
  id: number;
  place: string;
  address: string;
  amount: number;
  total: number;
  checkin: string;
  checkout: string;
};

type Flight = {
  id: number;
  name: string;
  logoUrl: string;
  airplaceNo: string;
  amount: number;
  date: string;
  takeoffTime: string;
  touchDownTime: string;
};

type TripContextState = {
  openActivityModal: boolean;
  setOpenActivityModal: (open: boolean) => void;
  openHotelModal: boolean;
  setOpenHotelModal: (open: boolean) => void;
  openFlightModal: boolean;
  setOpenFlightModal: (open: boolean) => void;
};
