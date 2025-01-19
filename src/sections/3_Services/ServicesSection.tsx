import ContainerWeb from "@/components/ContainerWeb";
import Topic from "@/components/Topic/Topic";
import TileService from "@/sections/3_Services/TileService";

export default function ServicesSection() {
    return (
        <section className={'flex flex-col relative -z-10'}>
            <div className={'-top-40 absolute w-full h-40 bg-orangeLight -z-10'}></div>
            <ContainerWeb idStr={'WhyUs'} className={'bg-orangeLight pb-7'}>
                <div className={'flex flex-row justify-start items-center'}>
                    <Topic name={'Usługi'}/>
                </div>
                <div className={'flex flex-col overflow-hidden'}>
                    <div className={'flex flex-row gap-5 flex-wrap'}>
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
                    <div className={'flex flex-row justify-center items-center mt-7'}>
                        <button className={'font-AdventPro font-medium text-xl bg-orangeMain py-2 px-3 text-white rounded-lg'}>Zobacz wszystkie</button>
                    </div>
                </div>
            </ContainerWeb>
        </section>
    )
}

const tileSections = [
    {
        icon: '/3_Services/Wiertarka.svg',
        topic: 'Remonty kuchni i łazienek',
        desc: 'Kompleksowe remonty kuchni, obejmujące wymianę podłóg, zabudowy kuchennej, montaż sprzętów oraz instalacje hydrauliczne i elektryczne. Tworzymy funkcjonalne i nowoczesne wnętrza.',
        bgColor: 'bg-greenMain',
        textColor: 'text-white',
    },
    {
        icon: '/3_Services/Zarowka.svg',
        topic: 'Instalacje elektryczne i hydrauliczne',
        desc: 'Montujemy i wymieniamy instalacje elektryczne, dbając o ich zgodność z normami oraz odpowiednią funkcjonalność.',
        bgColor: 'bg-orangeLight',
        textColor: 'text-neutral-700',
    },
    {
        icon: '/3_Services/Domek.svg',
        topic: 'Budowa domków, tarasów i zadaszeń',
        desc: 'Wykonujemy domki letniskowe z drewna, dostosowane do indywidualnych potrzeb. Gwarantujemy solidną konstrukcję i wysoki standard wykończenia.',
        bgColor: 'bg-orangeMain',
        textColor: 'text-white',
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



