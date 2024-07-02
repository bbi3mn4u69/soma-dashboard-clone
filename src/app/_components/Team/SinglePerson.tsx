import Image from "next/image";
import { useRouter } from "next/navigation";

export const SinglePerson = ({
  personImage,
  personName,
  personPosition,
  personRoute,
}: {
  personImage: string;
  personName: string;
  personPosition: string;
  personRoute: string;
}) => {
  const router = useRouter();
  return (
    <div className="flex  items-start justify-center gap-0 ">
      <div className="flex flex-col items-start justify-start">
        <Image
          src={personImage}
          alt="placeholder"
          width={200}
          height={200}
          className="h-[170px] w-[170px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-110 sm:h-[200px] sm:w-[200px]"
          onClick={() => {
            router.push(personRoute);
            localStorage.setItem("activeItem", "null");
          }}
        />
        <div className="flex flex-col justify-start gap-0">
          <div className="text-base font-semibold">{personName}</div>
          <div className="sm:backdrop:text-sm font-light text-gray-400 text-wrap w-[170px]">
            {personPosition}
          </div>
        </div>
      </div>
    </div>
  );
};
