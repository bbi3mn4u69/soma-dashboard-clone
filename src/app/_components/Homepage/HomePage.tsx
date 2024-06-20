

import NavBar from "../shared/NavBar";
import Hero from "./components/Hero";
import {Companies }from "./components/Companies";

const HomePage  = () => {
    return (
        <>
        <div className="scroll-smooth">
            <NavBar />
            <Hero />
            <Companies valuation="+5b" />
            <Companies valuation="1-5b" />
            <Companies valuation="500m-1b" />
            <Companies valuation="100-500m" />
            <Companies valuation="50-100m" />
            <Companies valuation="<50m" />
            <Companies valuation="N/A" />
        </div>
        </>
    )
}

export default HomePage;

