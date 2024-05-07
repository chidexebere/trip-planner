'use client';

import { useTripStateContext } from '@/contexts/TripContextProvider';
import { cards } from '@/helper/data';

interface Props {
  title: { text: string; color: string };
  description: { text: string; color: string };
  bgColor: string;
  button: { text: string; style: string };
}

const Card = ({ title, description, bgColor, button }: Props) => {
  const { setOpenActivityModal, setOpenFlightModal, setOpenHotelModal } =
    useTripStateContext();

  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;

    if (value === 'Activities') {
      setOpenActivityModal(true);
    }

    if (value === 'Hotels') {
      setOpenHotelModal(true);
    }

    if (value === 'Flights') {
      setOpenFlightModal(true);
    }
  };

  return (
    <div className={`px-3.5 py-[18px] rounded lg:w-[270px] ${bgColor}`}>
      <h3 className={`mb-2 font-bold ${title.color}`}>{title.text}</h3>
      <p className={`mb-[37px] text-sm leading-[22px] ${description.color}`}>
        {description.text}
      </p>
      <button
        className={`w-full text-center rounded text-sm py-3 px-6 ${button.style}`}
        onClick={toggleModal}
        value={title.text}
      >
        {button.text}
      </button>
    </div>
  );
};

const TripCards = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 lg:gap-1 lg:flex-row lg:justify-start">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          button={card.button}
        />
      ))}
    </div>
  );
};

export default TripCards;
