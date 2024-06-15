import HeroTopText from "./HeroTopText";
import HeroText from "./HeroText";
import HeroFilter from "./HeroFilter";

const Hero = () => {
  return (
    <div className="border-b border-gray-200">
      <div className=" mx-auto max-w-screen-lg px-6 py-4">
        <HeroTopText />
        <HeroText />
        <HeroFilter />
      </div>
    </div>
  );
};

export default Hero;
