import Topic from "@/components/Topic/Topic";
import ContainerWeb from "@/components/ContainerWeb";
import TileWhyUs from "@/sections/4_WhyUs/TileWhyUs";

export default function WhyUs() {

    return (
        <section className={'flex flex-col relative -z-10'}>
            <div className={'bg-orangeLight pb-20'}>
                <ContainerWeb idStr={'WhyUs'} className={''}>
                    <div className={'flex flex-row justify-center items-center'}>
                        <Topic name={'Dlaczego MY'}/>
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-7'}>
                        <div className={'basis-1/2 flex flex-col gap-7 items-center'}>
                            <TileWhyUs icon={'/4_WhyUs/olowek.svg'} topic={'Doświadczenie, na którym można polegać'}
                                       desc={'Od lat realizujemy różnorodne projekty remontowe i budowlane, zdobywając wiedzę i umiejętności, które gwarantują profesjonalne podejście do każdego zlecenia.'}/>
                            <TileWhyUs icon={'/4_WhyUs/linijka.svg'} topic={'Indywidualne podejście do każdego klienta'}
                                       desc={'Wierzymy, że każdy projekt jest wyjątkowy. Zawsze uważnie słuchamy potrzeb naszych klientów, aby dostarczyć rozwiązania najlepiej dopasowane do ich oczekiwań i budżetu.'}/>
                            <TileWhyUs icon={'/4_WhyUs/ololin.svg'} topic={'Terminowość i pełna przejrzystość'}
                                       desc={'Realizujemy prace zgodnie z ustalonym harmonogramem. Na bieżąco informujemy o postępach, a każdy etap prac jest transparentny – bez ukrytych kosztów i niespodzianek.'}/>
                        </div>

                        <div className={'basis-1/2 flex flex-col gap-7'}>
                            <TileWhyUs icon={'/4_WhyUs/klucz.svg'} topic={'Jakość wykonania'} del={0.15}
                                       desc={'Dbamy o trwałość i estetykę wykonania, dlatego stosujemy wyłącznie sprawdzone materiały. Nasza dbałość o detale to gwarancja efektu, który cieszy przez długie lata.'}/>
                            <TileWhyUs icon={'/4_WhyUs/srubokret.svg'} topic={'Szeroki zakres usług'} del={0.15}
                                       desc={'Oferujemy kompleksową obsługę remontowo-budowlaną – od drobnych napraw, przez wykończenia wnętrz, po realizacje „pod klucz”. Dzięki temu możesz zrealizować wszystkie swoje potrzeby budowlane w jednym miejscu.'}/>
                            <TileWhyUs icon={'/4_WhyUs/klusrub.svg'} topic={'Zaufanie potwierdzone opiniami'} del={0.15}
                                       desc={'Nasza firma cieszy się uznaniem i zaufaniem klientów. Pozytywne opinie oraz rekomendacje osób, które skorzystały z naszych usług, są najlepszym dowodem na jakość i niezawodność naszych realizacji.'}/>
                        </div>
                    </div>

                </ContainerWeb>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 224">
                <path fill="#F8F4E7" fillOpacity="1"
                      d="M0,224L26.7,197.3C53.3,171,107,117,160,106.7C213.3,96,267,128,320,154.7C373.3,181,427,203,480,208C533.3,213,587,203,640,176C693.3,149,747,107,800,122.7C853.3,139,907,213,960,218.7C1013.3,224,1067,160,1120,149.3C1173.3,139,1227,181,1280,181.3C1333.3,181,1387,139,1413,117.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
        </section>
    );
}