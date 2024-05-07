interface Props {
  title: string;
  children: React.ReactNode;
  toggleModal: () => void;
}

export const Modal = ({ title, children, toggleModal }: Props) => {
  return (
    <div
      id="modal"
      className="grid place-items-center fixed inset-0 z-40 bg-gray-500 bg-opacity-75 transition-opacity"
    >
      <div className="relative  pointer-events-none w-[800px]">
        <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h3 className="text-xl font-medium leading-normal text-gray-800">
              {title}
            </h3>
            <button
              id="closeModal"
              className="text-2xl font-medium leading-normal text-gray-800"
              onClick={toggleModal}
            >
              &#x2715;
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
