import Image from 'next/image';
import { Icon } from './Icon';
import { formatToNaira } from '@/helper';

const activities = [
  {
    id: 1,
    place: 'The Museum of Modern Art',
    description:
      ' Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant',
    amount: 123450,
  },
];

const Activities = () => {
  return (
    <div className="mt-7">
      <div className="">
        <div className="bg-primary-50 p-4 border-b 0">
          <div className=" flex flex-row justify-between">
            <div className="flex flex-row gap-2 mt-2">
              <Icon name="Activities" className="h-6 w-6" />
              <p className="text-white">Activites</p>
            </div>

            <div className="bg-white text-primary-50 rounded px-5 py-2 text-center cursor-pointer">
              Add Hotels
            </div>
          </div>

          {activities.map((activity) => (
            <div key={activity.id} className="flex flex-row mt-5 ">
              <div className="bg-white p-5 w-full">
                <div className="flex flex-row gap-3">
                  <div className="relative flex justify-center items-center">
                    <div>
                      <Image
                        src="/assets/images/art.jpg"
                        width={250}
                        height={250}
                        alt=""
                      />
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 flex space-x-40">
                      <Icon name="CaretCircleLeft" className="h-6 w-6" />
                      <Icon name="CaretCircleRight" className="h-6 w-6" />
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <div>
                      <div className="flex flex-row justify-between border-b  pb-4">
                        <div>
                          <h1 className="text-2xl font-bol">
                            {activity.place}
                          </h1>
                          <p className="w-[400px] text-xs font-bold">
                            {activity.description}
                          </p>
                          <div className="flex gap-3 mt-3">
                            <div className="flex flex-row iems-center">
                              <Icon name="MapPin" className="h-7 w-7" />
                              <p className="text-xs  text-primary-50 font-bold">
                                Direction
                              </p>
                            </div>
                            <div className="flex flex-row iems-center">
                              <Icon name="Star" className="h-7 w-7 " />
                              <p className="text-xs ">4.5(436)</p>
                            </div>
                            <div className="flex flex-row iems-center">
                              <Icon name="Clock" className="h-7 w-7 " />
                              <p className="text-xs ">1 hour</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 ml-48">
                          <h1 className=" font-bold text-2xl">
                            {formatToNaira(activity.amount)}
                          </h1>
                          <p>10:30AM on Mar 19</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-row justify-between border-b  pb-4 mt-3">
                        <div>
                          <div className="flex gap-3 mt-3">
                            <p className="text-xs  text-primary-50 font-bold">
                              What is included :{' '}
                            </p>

                            <p className="text-xs ">
                              Admission to the Empire State Building
                            </p>

                            <p className="text-xs text-primary-50 ">See More</p>
                          </div>
                        </div>

                        <div className="flex gap-3 mt-3">
                          <div className="bg-primary-50 rounded p-2">
                            <p className="text-xs text-white ">Day 1</p>
                          </div>
                          <Icon name="CaretUpDown" className="w-6 h-6  mb-1" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <div className="flex flex-row gap-5 mt-5">
                          <h3 className="text-primary-50 font-bold cursor-pointer">
                            Activity details
                          </h3>
                          <h3 className="text-primary-50 font-bold cursor-pointer">
                            Price details
                          </h3>
                        </div>

                        <h3 className="text-primary-50 font-bold cursor-pointer mt-5">
                          Edit details
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-error-100 px-2 ">
                <Icon name="Close" className="w-6  mt-36" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
