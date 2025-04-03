import { useEffect, useState } from "react";
import AboutHeroPage from "../UI/AboutHeroPage";
import BannerSlider from "../UI/BannerSlider";
import ClintPartner from "../UI/ClintPartner";
import Loading from "../UI/Loading";
import Partner from "../UI/Partner";
import TeamSection from "../UI/TeamSection";
import WhatWeProvide from "../UI/WhatProvider";

const About = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // 👈 Delay for 800ms
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <AboutHeroPage />
            <WhatWeProvide />
            <Partner />
            <ClintPartner />
            <TeamSection />
            <BannerSlider />
        </>
    )
}
export default About;