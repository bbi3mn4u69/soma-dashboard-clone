
import Link from "next/link";


const News = ({ name, url }: { name: string; url: string }) => {
  return (
    <div className="text-xs font-base text-purple-800 underline">
      <Link href={url}>{name}</Link>
    </div>
  );
};

const HeroTopText = () => {
  return (
    <div>
      <div className="flex flex-row space-x-3 justify-start whitespace-nowrap overflow-x-auto">
        <div className="text-xs font-light ">In the news:</div>
        <div className="flex flex-row justify-between space-x-3">
            <News name="Top Generative AI Funds" url="https://pitchbook.com/news/articles/top-generative-ai-vc-investors-list" />
            <News name="Top YC Invenstor" url="https://drive.google.com/file/d/1eCqJlIyuzkGKYZsGiQ326N1tQy6mcHBh/view?pli=1" />
            <News name="Midas List" url="https://www.forbes.com/profile/aneel-ranadive/?list=midas-seed&sh=2f7e4d0a2081" />
            <News name="Top seed YC for Founder" url="https://drive.google.com/file/d/1eCqJlIyuzkGKYZsGiQ326N1tQy6mcHBh/view?pli=1" />
        </div>
      </div>
    </div>
  );
};

export default HeroTopText;
