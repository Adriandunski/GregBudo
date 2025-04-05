'use client'
import ContainerWeb from "@/components/ContainerWeb";
import Topic from "@/components/Topic/Topic";
import TileService from "@/sections/3_Services/TileService";
import Przycisk from "@/sections/1_StartWeb/Przycisk";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useRouter} from "next/navigation";

export default function ServicesSection() {
    const [active, setActive] = useState(false);
    const route = useRouter();

    return (
        <section className={'flex flex-col relative'}>
            <div className={'-top-40 absolute w-full h-40 bg-orangeLight -z-50'}></div>
            <ContainerWeb idStr={'uslugi'} className={'bg-orangeLight pb-7'}>
                <div className={'flex flex-row justify-start items-center'}>
                    <Topic name={'Usługi'}/>
                </div>
                <div className={'flex flex-col overflow-hidden gap-5'}>
                    <div className={'flex flex-row gap-5 flex-wrap justify-center'}>
                        {tileSections.map((value, index) => (
                            <TileService key={index}
                                         icon={value.icon}
                                         topic={value.topic}
                                         desc={value.desc}
                                         bgColor={value.bgColor}
                                         textColor={value.textColor}
                                         delay={index * 0.500}
                            ></TileService>
                        ))}
                    </div>
                    <AnimatePresence>
                        {active &&
                            <motion.div className={'flex flex-row gap-5 flex-wrap justify-center'} exit={{height: 0, opacity: 0, transition: {duration: 0.5}}}>
                                {tileSectionsHidden.map((value, index) => (
                                    <TileService key={index}
                                                 icon={value.icon}
                                                 topic={value.topic}
                                                 desc={value.desc}
                                                 bgColor={value.bgColor}
                                                 textColor={value.textColor}
                                                 delay={index * 0.1}
                                    ></TileService>
                                ))}
                            </motion.div>}
                    </AnimatePresence>

                    <div className={'flex flex-row justify-center items-center mt-7 pb-2'}>
                        <Przycisk>
                            <div onClick={() => {setActive(!active); route.push('/#uslugi')}}
                                 className={'font-AdventPro font-medium text-xl bg-orangeMain py-2 px-3 text-white rounded-lg'}>{active ? 'Ukryj' : 'Zobacz wszystkie'}</div>
                        </Przycisk>
                    </div>
                </div>
            </ContainerWeb>
        </section>
    )
}

const tileSections = [
    {
        icon: '/3_Services/Walek.svg',
        topic: 'Malowanie i tapetowanie ścian',
        desc: 'Precyzyjnie malujemy i tapetujemy wnętrza, tworząc estetyczne i trwałe wykończenie. Doradzamy w doborze kolorów oraz technik wykończeniowych.',
        bgColor: 'bg-greenMain',
        textColor: 'text-white',
    },
    {
        icon: '/3_Services/Wiertarka.svg',
        topic: 'Remonty kuchni',
        desc: 'Kompleksowe remonty kuchni, obejmujące wymianę podłóg, zabudowy kuchennej, montaż sprzętów oraz instalacje hydrauliczne i elektryczne. Tworzymy funkcjonalne i nowoczesne wnętrza.',
        bgColor: 'bg-orangeLight',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Płytki.svg',
        topic: 'Remonty łazienek',
        desc: 'Modernizujemy łazienki, oferując układanie płytek, montaż armatury, kabin prysznicowych i wanien. Zapewniamy estetykę i komfort użytkowania.',
        bgColor: 'bg-orangeMain',
        textColor: 'text-white',
    },
];

const tileSectionsHidden = [
    {
        icon: '/3_Services/Podloga.svg',
        topic: 'Układanie podłóg',
        desc: 'Specjalizujemy się w układaniu paneli, desek podłogowych oraz płytek ceramicznych, gwarantując trwałość i profesjonalne wykończenie.',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Kran.svg',
        topic: 'Instalacje hydrauliczne',
        desc: 'Wykonujemy nowe instalacje hydrauliczne oraz modernizujemy istniejące systemy, zapewniając niezawodność i bezpieczeństwo.',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Zarowka.svg',
        topic: 'Instalacje elektryczne',
        desc: 'Montujemy i wymieniamy instalacje elektryczne, dbając o ich zgodność z normami oraz odpowiednią funkcjonalność.',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/WiaderkoTest.svg',
        topic: 'Zabudowy gipsowo-kartonowe',
        desc: 'Tworzymy funkcjonalne zabudowy wnętrz, takie jak ścianki działowe, sufity podwieszane czy wnęki. Optymalizujemy przestrzeń zgodnie z potrzebami klienta.',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Drzwi.svg',
        topic: 'Składanie mebli',
        desc: 'Profesjonalnie składamy meble, od prostych elementów po kompleksowe zabudowy. Dbamy o solidne i estetyczne wykonanie.',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Kask.svg',
        topic: 'Budowa tarasów i zadaszeń',
        desc: 'Budujemy tarasy oraz zadaszenia z drewna i innych materiałów, zapewniając trwałość i estetykę.',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Domek.svg',
        topic: 'Budowa domków letniskowych z drewna',
        desc: 'Wykonujemy domki letniskowe z drewna, dostosowane do indywidualnych potrzeb. Gwarantujemy solidną konstrukcję i wysoki standard wykończenia.',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-700',
    }
];

const tileSectionsTEMP = [
    {
        icon: '/3_Services/Walek.svg',
        topic: 'Malowanie i tapetowanie ścian',
        desc: 'Precyzyjnie malujemy i tapetujemy wnętrza, tworząc estetyczne i trwałe wykończenie. Doradzamy w doborze kolorów oraz technik wykończeniowych.',
        bgColor: 'bg-orangeLight',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Wiertarka.svg',
        topic: 'Remonty kuchni',
        desc: 'Kompleksowe remonty kuchni, obejmujące wymianę podłóg, zabudowy kuchennej, montaż sprzętów oraz instalacje hydrauliczne i elektryczne. Tworzymy funkcjonalne i nowoczesne wnętrza.',
        bgColor: 'bg-[#F6E7D4]',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Płytki.svg',
        topic: 'Remonty łazienek',
        desc: 'Modernizujemy łazienki, oferując układanie płytek, montaż armatury, kabin prysznicowych i wanien. Zapewniamy estetykę i komfort użytkowania.',
        bgColor: 'bg-[#F4DBC1]',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Podloga.svg',
        topic: 'Układanie podłóg',
        desc: 'Specjalizujemy się w układaniu paneli, desek podłogowych oraz płytek ceramicznych, gwarantując trwałość i profesjonalne wykończenie.',
        bgColor: 'bg-[#F2CEAF]',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Kran.svg',
        topic: 'Instalacje hydrauliczne',
        desc: 'Wykonujemy nowe instalacje hydrauliczne oraz modernizujemy istniejące systemy, zapewniając niezawodność i bezpieczeństwo.',
        bgColor: 'bg-[#F0C29C]',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Zarowka.svg',
        topic: 'Instalacje elektryczne',
        desc: 'Montujemy i wymieniamy instalacje elektryczne, dbając o ich zgodność z normami oraz odpowiednią funkcjonalność.',
        bgColor: 'bg-[#EFB589]',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Ściana.svg',
        topic: 'Zabudowy gipsowo-kartonowe',
        desc: 'Tworzymy funkcjonalne zabudowy wnętrz, takie jak ścianki działowe, sufity podwieszane czy wnęki. Optymalizujemy przestrzeń zgodnie z potrzebami klienta.',
        bgColor: 'bg-[#EDA976]',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Narzędzia.svg',
        topic: 'Składanie mebli',
        desc: 'Profesjonalnie składamy meble, od prostych elementów po kompleksowe zabudowy. Dbamy o solidne i estetyczne wykonanie.',
        bgColor: 'bg-[#EB9C64]',
        textColor: 'text-white',
    },
    {
        icon: '/3_Services/Kask.svg',
        topic: 'Budowa tarasów i zadaszeń',
        desc: 'Budujemy tarasy oraz zadaszenia z drewna i innych materiałów, zapewniając trwałość i estetykę.',
        bgColor: 'bg-[#E99051]',
        textColor: 'text-white',
    },
    {
        icon: '/3_Services/Domek.svg',
        topic: 'Budowa domków letniskowych z drewna',
        desc: 'Wykonujemy domki letniskowe z drewna, dostosowane do indywidualnych potrzeb. Gwarantujemy solidną konstrukcję i wysoki standard wykończenia.',
        bgColor: 'bg-orangeMain',
        textColor: 'text-white',
    }
];



