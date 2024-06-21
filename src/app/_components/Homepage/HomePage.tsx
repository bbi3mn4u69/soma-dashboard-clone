

import NavBar from "../shared/NavBar";
import Hero from "./components/Hero";
import {Companies }from "./components/Companies";
import { useAppContext } from "../context";
const HomePage  = () => {
    const { industriesSelected, regionsSelected } = useAppContext();
    return (
        <>
        <div className="scroll-smooth">
            <NavBar />
            <Hero />
            <Companies valuation="+5b" region={regionsSelected} sectorName={industriesSelected} />
            <Companies valuation="1-5b" region={regionsSelected} sectorName={industriesSelected} />
            <Companies valuation="500m-1b" region={regionsSelected} sectorName={industriesSelected} />
            <Companies valuation="100-500m" region={regionsSelected} sectorName={industriesSelected} />
            <Companies valuation="50-100m" region={regionsSelected} sectorName={industriesSelected} />
            <Companies valuation="<50m" region={regionsSelected} sectorName={industriesSelected} />
            <Companies valuation="N/A" region={regionsSelected} sectorName={industriesSelected} />
        </div>
        </>
    )
}

export default HomePage;

