import HeroTopText from "./HeroTopText";
import HeroText from "./HeroText";
import HeroFilter from "./HeroFilter";
import MobileFilter from "./MobileFilter";
import MobileFilterModal from "./MobileFilterModal";

const Hero = () => {
  return (
    <div className="border-b border-gray-200">
      <div className=" mx-auto max-w-screen-lg px-6 py-4">
        <HeroTopText />
        <HeroText />
        <MobileFilterModal />
        <div className="hidden sm:block">
          <HeroFilter />
        </div>

        <MobileFilter />
      </div>
    </div>
  );
};

export default Hero;
