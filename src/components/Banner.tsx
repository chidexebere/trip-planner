import { Icon } from './Icon';

export const Banner = () => {
  return (
    <div className="bg-banner p-10 bg-auto bg-start bg-no-repeat h-[200px] rounded">
      <Icon
        name="ArrowLeft"
        className="w-6 h-6 text-[#344054] cursor-pointer"
      />
    </div>
  );
};
