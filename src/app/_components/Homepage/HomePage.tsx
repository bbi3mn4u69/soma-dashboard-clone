

import NavBar from "../shared/NavBar";
import Hero from "./components/Hero";
import FiveBCompanies from "./components/+5bCompanies";
import OneToFiveBCompanies from "./components/1-5bCompanies";
import FiveMToOneBCompanies from "./components/500m-1bCompanies";
import OneMToFiveMCompanies from "./components/100-500mCompanies"
import FiveMToOneMCompanies from "./components/50-100mCompanies"
import LessThan5MCompanies from "./components/50mCompanies"
const HomePage  = () => {
    return (
        <>
        <div>
            <NavBar />
            <Hero />
            <FiveBCompanies />
            <OneToFiveBCompanies />
            <FiveMToOneBCompanies />
            <OneMToFiveMCompanies />
            <FiveMToOneMCompanies />
            <LessThan5MCompanies />
        </div>
        </>
    )
}

export default HomePage;

