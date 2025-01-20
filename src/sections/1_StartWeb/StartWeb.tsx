import Image from "next/image";
import ContainerWeb from "@/components/ContainerWeb";
import Link from "next/link";
import InViewApear from "@/components/Animations/InViewApear";
import PopupButtom from "@/components/PopUps/PopupButtom";
import BottomPopupStartWeb from "@/sections/1_StartWeb/BottomPopupStartWeb";

export default function StartWeb() {

    return (
        <div className={'flex flex-col'}>
            <ContainerWeb idStr={'StartWeb'} className={'bg-greenMain z-10'}>
                <div className={'flex flex-col items-center justify-center gap-7 md:flex-row'}>
                    <div className={'flex flex-col basis-1/2 shrink-0 gap-8'}>
                        <InViewApear directory={'l'} offset={100} delay={0.55} slideOut={50}>
                            <div
                                className={'text-white text-center md:text-left pt-12 font-SourGummy text-6xl font-semibold tracking-wider lg:pt-0'}>Gregory
                                buduje i remontuje
                            </div>
                        </InViewApear>
                        <InViewApear directory={'l'} offset={100} delay={0.75} slideOut={15}>
                            <div className={'text-white text-center md:text-left font-AdventPro text-lg'}>Solidne
                                remonty i budowa na każdym etapie.
                                Zaufaj profesionalistom, którzy dbają o jakość każdego projektu. Zaufaj naszemu
                                wieloletniemu doświadczeniu.
                            </div>
                        </InViewApear>
                        <InViewApear directory={'l'} offset={100} delay={1} slideOut={15}>
                            <div className={'flex justify-center md:justify-start'}>
                                <Link
                                    className={'bg-orangeMain px-7 py-2 text-white font-AdventPro text-lg rounded-md font-semibold'}
                                    href={'/O_nas'}>Sprawdź Nasze Usługi</Link>
                            </div>
                        </InViewApear>
                    </div>
                    <div className={'basis-1/2 flex items-center justify-center shrink-0'}>
                        <InViewApear directory={'r'} offset={100} delay={1} slideOut={15}>
                            <Image src={'/domekStartWeb.PNG'} alt={'Obrazek budowy domu'} width={3700} height={3700}/>
                        </InViewApear>
                    </div>
                </div>
                <PopupButtom>
                    <BottomPopupStartWeb/>
                </PopupButtom>
            </ContainerWeb>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 192" className={''}>
                <path fill="#203f2a" fillOpacity="1"
                      d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,133.3C672,128,768,96,864,74.7C960,53,1056,43,1152,64C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>


    );
}