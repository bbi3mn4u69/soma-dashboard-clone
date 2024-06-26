import Image from "next/image";
import { useRouter } from "next/navigation";

export const SinglePerson = ({
  personImage,
  personName,
  personPosition,
  personRoute
}: {
  personImage: string;
  personName: string;
  personPosition: string;
  personRoute: string;
}) => {
    const router = useRouter()
  return (
    <div className="flex flex-col justify-start gap-3">
      <Image
        src={personImage}
        alt="placeholder"
        width={200}
        height={200}
        className="rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
        onClick={() => {
            router.push(personRoute)
            localStorage.setItem("activeItem", "null");
        }}
      />
      <div className="flex flex-col gap-0">
        <div className="text-base font-semibold">{personName}</div>
        <div className="text-sm font-light text-gray-400">{personPosition}</div>
      </div>
    </div>
  );
};
