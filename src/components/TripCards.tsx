const cards = [
  {
    id: 1,
    title: { text: 'Activities', color: 'text-white' },
    description: {
      text: 'Build, personalize, and optimize your itineraries with our trip planner.',
      color: 'text-white',
    },
    bgColor: 'bg-[#000031]',
    button: { text: 'Add Acvities', style: 'text-white bg-[#0D6EFD]' },
  },

  {
    id: 2,
    title: { text: 'Hotels', color: 'text-black' },
    description: {
      text: 'Build, personalize, and optimize your itineraries with our trip planner.',
      color: 'text-[#1D2433]',
    },
    bgColor: 'bg-[#E7F0FF]',
    button: { text: 'Add Hotels', style: 'text-white bg-[#0D6EFD]' },
  },

  {
    id: 3,
    title: { text: 'Flights', color: 'text-white' },
    description: {
      text: 'Build, personalize, and optimize your itineraries with our trip planner.',
      color: 'text-white',
    },
    bgColor: 'bg-[#0D6EFD]',
    button: { text: 'Add Flights', style: 'text-[#0D6EFD] bg-white' },
  },
];

interface Props {
  title: { text: string; color: string };
  description: { text: string; color: string };
  bgColor: string;
  button: { text: string; style: string };
}

const Card = ({ title, description, bgColor, button }: Props) => {
  return (
    <div className={`px-3.5 py-[18px] rounded lg:w-[270px] ${bgColor}`}>
      <h3 className={`mb-2 font-bold ${title.color}`}>{title.text}</h3>
      <p className={`mb-[37px] text-sm leading-[22px] ${description.color}`}>
        {description.text}
      </p>
      <button
        className={`w-full text-center rounded text-sm py-3 px-6 ${button.style}`}
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
