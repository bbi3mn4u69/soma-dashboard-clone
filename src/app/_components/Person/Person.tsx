import Image from "next/image";
import PlaceHolderImage from "../../image/profile.webp";

 export const Person = ( {personImage, personName, personPosition, personBio} : {personImage: string, personName: string, personPosition: string, personBio: string}) => {
  return (
    <div className="mx-auto mt-20 max-w-screen-md px-20">
      <div className="text-start">
        <span>
          <Image
            src={personImage}
            alt="placeholder"
            width={200}
            height={200}
            className="float-left mr-3 rounded-md"
          ></Image>
        </span>
        <div className="font-light tracking-tight text-base leading-8 text-gray-500">
            <div className="text-3xl font-semibold text-black">
            {personName}
            </div>
            <div className="text-2xl font-extralight text-gray-400 tracking-tight mb-5">
                {personPosition}
            </div>
            {personBio}
        </div>
      </div>
    </div>
  );
};


