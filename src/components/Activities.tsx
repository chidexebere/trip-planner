'use client';

import { useTripStateContext } from '@/contexts/TripContextProvider';
import { formatToNairaWithCurrency } from '@/helper';
import { activities } from '@/helper/data';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from './Icon';
import { Modal } from './Modal';

const Activities = () => {
  const { openActivityModal, setOpenActivityModal } = useTripStateContext();
  const [displayedActivity, setDisplayedActivity] = useState<Activity[]>([]);
  const [availableActivity, setAvailableActivity] =
    useState<Activity[]>(activities);

  const toggleModal = () => {
    setOpenActivityModal(!openActivityModal);
  };

  const addActivities = (selectedId: number) => {
    const selectedActivity = availableActivity.find(
      (activity) => activity.id === selectedId
    ) as Activity;

    setDisplayedActivity([...displayedActivity, selectedActivity]);

    const filteredAvailableActivity = availableActivity.filter(
      (activity) => activity.id !== selectedActivity.id
    );
    setAvailableActivity(filteredAvailableActivity);
    toggleModal();
  };

  const deleteActivities = (selectedId: number) => {
    const deletedActivity = displayedActivity.find(
      (activity) => activity.id === selectedId
    ) as Activity;
    const filteredActivity = displayedActivity.filter(
      (activity) => activity.id !== selectedId
    );
    setAvailableActivity([...availableActivity, deletedActivity]);
    setDisplayedActivity(filteredActivity);
  };

  return (
    <div className="bg-[#0054E4] px-6 pt-6 pb-[52px] flex flex-col gap-y-6 rounded">
      <div className=" flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-2.5">
          <Icon name="ActivitiesWhite" className="h-6 w-6" />
          <p className="text-white font-semibold text-lg">Activites</p>
        </div>

        {displayedActivity.length > 0 && (
          <button
            className="max-w-[153px] font-semibold text-center rounded text-sm py-3 px-6 text-[#0054E4] bg-white"
            onClick={toggleModal}
          >
            Add Activites
          </button>
        )}
      </div>

      {displayedActivity.length === 0 ? (
        <div className="grid place-items-center bg-white pl-5 py-5 w-full h-40">
          <button
            className="max-w-[153px] text-center rounded text-sm py-3 px-6 bg-[#0054E4] text-white"
            onClick={toggleModal}
          >
            Add Activites
          </button>
        </div>
      ) : (
        <>
          {displayedActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex justify-between overflow-x-auto rounded"
            >
              <div className="bg-white pl-5 py-5 w-full">
                <div className="flex flex-col xl:flex-row items-center">
                  <div className="relative">
                    <Image
                      src="/images/museum.svg"
                      width={232}
                      height={246}
                      alt="Museum"
                      className="rounded"
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between p-3 w-full">
                      <Icon name="CaretCircleLeft" className="h-8 w-8" />
                      <Icon name="CaretCircleRight" className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="w-full divide-y">
                    <div className="pl-4 flex flex-col lg:flex-row justify-between pr-[42px]">
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-1.5 pb-[18px]">
                        <h3 className="text-[#1D2433] font-semibold text-xl">
                          {activity.place}
                        </h3>
                        <p className="text-[#1D2433] font-medium">
                          {activity.description}
                        </p>
                        <div className="flex  items-center gap-3 text-[#676E7E] font-medium">
                          <div className="flex items-center gap-x-1">
                            <Icon name="MapPin" className="h-[18px] w-[18px]" />
                            <p className="text-[#0D6EFD]">Direction</p>
                          </div>
                          <div className="flex items-center gap-x-1">
                            <Icon name="Star" className="h-[18px] w-[18px]" />
                            <p className="">4.5(436)</p>
                          </div>
                          <div className="flex items-center gap-x-1">
                            <Icon name="Clock" className="h-[18px] w-[18px]" />
                            <p className="">1 hour</p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-y-1 font-medium text-[#1D2433]">
                        <h3 className="font-semibold text-2xl text-right">
                          {formatToNairaWithCurrency(activity.amount)}
                        </h3>
                        <p>{activity.schedule}</p>
                      </div>
                    </div>

                    <div className="pl-4 py-3.5 flex flex-col lg:flex-row justify-between pr-[42px] font-medium text-[18px] text-[#647995]">
                      <div className="flex flex-col md:flex-row gap-x-3">
                        <p className="">What is included :</p>
                        <p className="">{activity.extras}</p>
                        <a className=" text-[#0D6EFD]">See More</a>
                      </div>

                      <div className="flex gap-x-3 items-center">
                        <div className="bg-[#0D6EFD] rounded p-2">
                          <p className="text-xs text-white ">Day 1</p>
                        </div>
                        <div className="flex flex-col gap-y-2.5">
                          <Icon name="CaretCircleUp" className="w-5 h-5" />
                          <Icon name="CaretCircleDown" className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="pl-4 pt-2 pr-[42px] flex flex-nowrap justify-between items-center text-lg text-[#0D6EFD] font-medium">
                      <div className="flex flex-row item-center gap-x-5 ">
                        <a className="cursor-pointer">Activity details</a>
                        <a className="cursor-pointer">Price details</a>
                      </div>
                      <a className="cursor-pointer">Edit details</a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#FBEAE9] px-3 flex flex-col justify-center w-fit cursor-pointer"
                onClick={() => deleteActivities(activity.id)}
              >
                <Icon name="Close" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </>
      )}

      {openActivityModal && (
        <Modal title="Select Activity" toggleModal={toggleModal}>
          {availableActivity.length === 0 ? (
            <p className="flex justify-center items-center p-5">
              You have selected all available activity
            </p>
          ) : (
            <div className="flex flex-col gap-y-2 p-5">
              {availableActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex justify-between items-center hover:bg-[#0D6EFD] hover:text-white cursor-pointer p-3"
                  onClick={() => addActivities(activity.id)}
                >
                  <span>{activity.place}</span>
                  <span>{activity.schedule}</span>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Activities;
