import Topic from "@/components/Topic/Topic";
import ContainerWeb from "@/components/ContainerWeb";
import TileWhyUs from "@/sections/4_WhyUs/TileWhyUs";

export default function WhyUs() {

    return (
        <section className={'flex flex-col relative'}>
            <div className={'bg-orangeLight pb-20'}>
                <ContainerWeb idStr={'WhyUs'} className={''}>
                    <div className={'flex flex-row justify-center items-center'}>
                        <Topic name={'Dlaczego MY'}/>
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-7'}>
                        <div className={'basis-1/2 flex flex-col gap-7'}>
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
        </section>
    );
}