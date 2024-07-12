import Image from "next/image";
import PlaceHolder from "../../image/profile.webp";
import Link from "next/link";
export const SignleNews = ({
  publishedAt,
  title,
  sourceUrl,
}: {
  publishedAt: string;
  title: string;
  sourceUrl: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-1 py-5">
      <div className="flex flex-row items-center gap-2">
        <div className="bg-gray-5 h-1 w-1 rounded-full bg-gray-500"></div>
        <div className="text-base font-light text-gray-500">{publishedAt}</div>
      </div>
      <Link href={sourceUrl}>
        <div className="cursor-pointer text-xl font-bold text-black transition-all duration-300 hover:text-purple-700">
          {title}
        </div>
      </Link>
      <div className="flex max-w-lg justify-start text-justify"></div>
    </div>
  );
};
