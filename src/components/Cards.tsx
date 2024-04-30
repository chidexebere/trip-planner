interface Props {
  head: string;
  details: string;
  classname: string;
  buttonText: string;
  buttonClass: string;
}

const cards = [
  {
    head: 'Activities',
    details:
      'Build, personalize, and optimize your itineraries with our trip planner.',
    classname: 'text-white bg-primary-100',
    buttonText: 'Add Acvities',
    buttonClass: '',
  },

  {
    head: 'Hotels',
    details:
      'Build, personalize, and optimize your itineraries with our trip planner.',
    classname: 'text-black bg-primary-200 ',
    buttonText: 'Add Hotels',
    buttonClass: ' text-white',
  },

  {
    head: 'Flights',
    details:
      'Build, personalize, and optimize your itineraries with our trip planner.',
    classname: 'text-white bg-primary-50',
    buttonText: 'Add Flieghts',
    buttonClass: 'bg-white text-primary-50 ',
  },
];

const Card = ({ head, details, classname, buttonClass, buttonText }: Props) => {
  return (
    <div className={`p-3 rounded mt-10 max-w-[250px] ${classname}`}>
      <h3 className="mb-3 font-bold text-2xl">{head}</h3>
      <p className="mb-10 font-light text-xs">{details}</p>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          head={card.head}
          details={card.details}
          classname={card.classname}
          buttonText={card.buttonText}
          buttonClass={card.buttonClass}
        />
      ))}
      {/* <div style={{ width: '200px' }} /> */}
    </div>
  );
};

export default Cards;
