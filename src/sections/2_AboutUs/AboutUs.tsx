import ContainerWeb from "@/components/ContainerWeb";
import Topic from "@/components/Topic/Topic";
import Link from "next/link";
import Image from "next/image";
import InViewApear from "@/components/Animations/InViewApear";
import Przycisk from "@/sections/1_StartWeb/Przycisk";

export default function AboutUs() {
    return (
        <section className={'relative'} id={'aboutUs'}>
            <div className={'-top-0 absolute w-full h-56 bg-orangeDark -z-50 -translate-y-full'}></div>
            <div className={'bg-orangeDark pb-8'}>
                <ContainerWeb idStr={'oNas'} className={''}>
                    <div className={'flex flex-row items-center justify-center'}>
                        <Topic name={'O nas'}/>
                    </div>

                    <div className={'flex flex-col gap-10 lg:flex-row'}>
                        <div className={'basis-2/5 bg-orangeMain rounded-3xl flex flex-col gap-7 px-7 py-12'}>
                            <Image src={'/2_AboutUs/budynek01.svg'} alt={'budynek'} width={100} height={100}></Image>
                            <p className={'font-SourGummy font-bold text-4xl text-neutral-800'}>GregBudo – Solidność, Doświadczenie, Profesjonalizm</p>
                            <p className={'text-white font-AdventPro text-xl tracking-wider leading-7'}>
                                Rozumiemy, że remont czy budowa to duża inwestycja, dlatego dbamy o przejrzystość procesu, terminowość i komunikację z klientem na każdym etapie prac. Naszym celem jest nie tylko spełnienie oczekiwań, ale ich przekroczenie.
                            </p>
                            <div className={'flex'}>
                                <Przycisk>
                                    <Link href={'/#uslugi'}
                                          className={'bg-greenMain px-7 py-2 text-white font-AdventPro text-lg rounded-md font-semibold'}>Nasze
                                        Usługi
                                    </Link>
                                </Przycisk>

                            </div>
                        </div>
                        <div className={'basis-3/5 flex flex-col gap-7'}>

                            <div className={'basis-1/5'}>
                                <InViewApear directory={'b'} offset={150}>
                                    <div className={'bg-white rounded-3xl px-3 py-5 flex flex-row min-h-24'}>
                                        <div className={'basis-1/5 border-r-2 border-r-neutral-200 px-2'}>
                                            <div className={'relative flex w-full h-full'}>
                                                <Image src={'/2_AboutUs/kask.svg'} alt={'budynek'} fill={true}
                                                       objectFit={'contain'}></Image>
                                            </div>
                                        </div>
                                        <div className={'basis-4/5'}>
                                            <p className={'text-base text-neutral-600 font-medium font-AdventPro ml-5'}>
                                                Pracujemy zgodnie z najwyższymi standardami i normami branżowymi, dbając o jakość oraz bezpieczeństwo naszych pracowników i klientów. </p>
                                        </div>
                                    </div>
                                </InViewApear>
                            </div>

                            <div className={'basis-full'}>
                                <InViewApear directory={'b'} offset={150}>
                                    <div className={'bg-white rounded-3xl  overflow-hidden relative min-h-80 h-full'}>
                                        <Image src={'/testowe1.jpg'} alt={'Zdjecie'} fill={true} objectFit={'cover'}/>
                                    </div>
                                </InViewApear>
                            </div>

                            <div className={'basis-1/5'}>
                                <InViewApear directory={'b'} offset={150}>
                                    <div className={'bg-white rounded-3xl px-3 py-5 flex flex-row min-h-24'}>
                                        <div className={'basis-1/5 border-r-2 border-r-neutral-200 px-2'}>
                                            <div className={'relative flex w-full h-full'}>
                                                <Image src={'/2_AboutUs/sciana.svg'} alt={'budynek'} fill={true}
                                                       objectFit={'contain'}></Image>
                                            </div>
                                        </div>
                                        <div className={'basis-4/5'}>
                                            <p className={'text-base text-neutral-600 font-medium font-AdventPro ml-5'}>Zapewniamy pełną obsługę inwestycji – od projektu, przez budowę i remont, aż po finalne wykończenie wnętrz. Korzystamy z wysokiej jakości materiałów, by każda realizacja była trwała, funkcjonalna i estetyczna.</p>
                                        </div>
                                    </div>
                                </InViewApear>
                            </div>

                        </div>
                    </div>
                </ContainerWeb>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.81 -0.81 1440 96.12">
                <path fill="#F7EAD8" fillOpacity="1"
                      d="M -0.811 69.625 L 47.189 77.476 C 95.189 85.033 191.189 101.175 287.189 93.104 C 383.189 85.033 479.189 54.217 575.189 53.997 C 671.189 54.217 767.189 85.033 863.189 89.215 C 959.189 93.104 1055.189 69.625 1151.189 65.737 C 1247.189 61.555 1343.189 77.696 1391.189 85.253 L 1439.189 93.104 L 1439.189 -0.811 L 1391.189 -0.811 C 1343.189 -0.811 1247.189 -0.811 1151.189 -0.811 C 1055.189 -0.811 959.189 -0.811 863.189 -0.811 C 767.189 -0.811 671.189 -0.811 575.189 -0.811 C 479.189 -0.811 383.189 -0.811 287.189 -0.811 C 191.189 -0.811 95.189 -0.811 47.189 -0.811 L -0.811 -0.811 L -0.811 69.625 Z"
                      transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"></path>
            </svg>
        </section>
    );
}