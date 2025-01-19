import Link from "next/link";
import ContainerWeb from "@/components/ContainerWeb";
import InViewApear from "@/components/Animations/InViewApear";
import Formule from "@/sections/7_contactUs/Formule";
import TileContact from "@/sections/7_contactUs/TileContact";
import Topic from "@/components/Topic/Topic";

export default function ContactUs() {
    return (
        <ContainerWeb idStr={'contactUs'}>
            <div className={'flex flex-col gap-16'}>
                <div
                    className={'flex flex-col gap-y-3 lg:items-start justify-center lg:ml-32 items-center text-center lg:text-left'}>
                    <Topic name={"Jak możemy Ci pomóc?"}/>
                </div>
                <div className={'flex lg:flex-row flex-col xl:gap-16 gap-8'}>
                    <div className={'basis-1/2 '}>
                        <InViewApear directory={'l'}>
                            <div className={'bg-orangeDark flex flex-col sm:p-12 p-8 rounded-2xl  gap-8'}>

                                <p className={'font-Jost text-3xl font-semibold'}>Napisz do nas!</p>
                                <Formule></Formule>
                            </div>
                        </InViewApear>
                    </div>
                    <div className={'basis-1/2 flex flex-col gap-y-8'}>
                        <div className={'flex justify-between gap-3 sm:flex-row flex-col'}>
                            <TileContact topic={'Zadzwoń'} isDiff={false}>
                                <>
                                    <path strokeLinecap="round" strokeLinejoin="round"

                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                                </>
                                <Link className={'font-Jost font-light text-neutral-800'}
                                      href={'tel:723435267'}>723-435-267</Link>
                            </TileContact>
                            <TileContact topic={'Napisz'} isDiff={false}>
                                <>
                                    <path strokeLinecap="round" strokeLinejoin="round"

                                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                                </>
                                <Link className={'font-Jost font-light text-neutral-800'}
                                      href={'mailto:adriandunski27@gmail.com'}>adriandunski27@gmail.com</Link>


                            </TileContact>
                        </div>
                        <div className={'flex h-full rounded-2xl overflow-hidden'}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2267.246556658093!2d17.04887687610169!3d51.101282640290954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3e6a5a9f2ef%3A0xe0276d7f0e2e2ee3!2sGregBudo!5e1!3m2!1spl!2spl!4v1736863364432!5m2!1spl!2spl"
                                    loading="eager"
                                    referrerPolicy="no-referrer-when-downgrade" className={'w-full h-full'}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerWeb>
    );
}