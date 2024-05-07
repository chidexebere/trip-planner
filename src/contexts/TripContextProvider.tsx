import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const initialState = {
  openActivityModal: false,
  setOpenActivityModal: () => undefined,
  openHotelModal: false,
  setOpenHotelModal: () => undefined,
  openFlightModal: false,
  setOpenFlightModal: () => undefined,
};

const TripStateContext = createContext<TripContextState>(initialState);

export const TripContextProvider = ({ children }: Props) => {
  const [openActivityModal, setOpenActivityModal] = useState(false);
  const [openHotelModal, setOpenHotelModal] = useState(false);
  const [openFlightModal, setOpenFlightModal] = useState(false);

  return (
    <TripStateContext.Provider
      value={{
        openActivityModal,
        setOpenActivityModal,
        openHotelModal,
        setOpenHotelModal,
        openFlightModal,
        setOpenFlightModal,
      }}
    >
      {children}
    </TripStateContext.Provider>
  );
};

export const useTripStateContext = () => useContext(TripStateContext);
