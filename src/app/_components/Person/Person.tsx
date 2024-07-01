import Image from "next/image";
import PlaceHolderImage from "../../image/profile.webp";

export const Person = ({
  personImage,
  personName,
  personPosition,
  personBio,
}: {
  personImage: string;
  personName: string;
  personPosition: string;
  personBio: string;
}) => {
  return (
    <div className="mx-auto mt-20 px-7 sm:max-w-screen-md sm:px-20">
      <div className="text-start">
        <span>
          <Image
            src={personImage}
            alt="placeholder"
            width={200}
            height={200}
            className="float-left mb-7 h-[300px] w-[300px] rounded-md sm:mr-3 sm:h-[200px] sm:w-[200px] "
          ></Image>
        </span>
        <div className="text-base font-light leading-8 tracking-tight text-gray-500">
          <div className="text-3xl font-semibold text-black">{personName}</div>
          <div className="mb-2 text-xl font-extralight tracking-tight text-gray-400 sm:mb-5 sm:text-2xl">
            {personPosition}
          </div>
          {personBio}
        </div>
      </div>
    </div>
  );
};
