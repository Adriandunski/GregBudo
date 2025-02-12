import StartWeb from "@/sections/1_StartWeb/StartWeb";
import AboutUs from "@/sections/2_AboutUs/AboutUs";
import WhyUs from "@/sections/4_WhyUs/WhyUs";
import ServicesSection from "@/sections/3_Services/ServicesSection";
import RealizacjeSekcja from "@/sections/5_Realizacje/RealizacjeSekcja";
import Opinions from "@/sections/6_Opinie/Opinions";
import ContactUs from "@/sections/7_contactUs/ContactUs";

export default function Home() {
    return (
        <main>
            <StartWeb></StartWeb>
            <AboutUs></AboutUs>
            <ServicesSection></ServicesSection>
            <WhyUs></WhyUs>
            <RealizacjeSekcja></RealizacjeSekcja>
            <Opinions></Opinions>
            <ContactUs></ContactUs>


        </main>
    );
}
