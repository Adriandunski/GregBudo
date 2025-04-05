'use client'
import {AnimatePresence, motion} from "framer-motion";
import {useEffect} from "react";
import Link from "next/link";
import LingNavigationContainer from "@/components/Header/LingNavigationContainer";
import useWindowWith from "@/components/useWindowWith";
import LingNavigationOrangeContainer from "@/components/Header/LingNavigationOrangeContainer";

export default function Navigation({open, setOpen}: { open: boolean, setOpen: any}) {

    const childVariants = {
        visible: {translateY: 0, opacity: 1, transition: {duration: 0.5}},
        hidden: {opacity: 0, transition: {duration: 0.5}}
    };

    const bigScreen = useWindowWith(1024);

    useEffect(() => {
        if (bigScreen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [bigScreen, setOpen]);

    return (
        <AnimatePresence>
            {open &&
                    <motion.nav variants={childVariants} initial={'hidden'} whileInView={'visible'} exit={'hidden'}
                        className={'top-full bg-greenMain lg:mt-0 flex lg:flex-row flex-col items-center justify-start pt-28 lg:pt-0 lg:justify-center font-Jost gap-5 text-lg absolute lg:static left-0  w-full lg:w-auto h-screen lg:h-auto'}

                    >

                            <LingNavigationContainer>
                                <Link href={'/#StartWeb'}>Strona główna</Link>
                            </LingNavigationContainer>

                            <LingNavigationContainer>
                                <Link href={'/#oNas'}>O nas</Link>
                            </LingNavigationContainer>

                            <LingNavigationContainer>
                                <Link href={'/#uslugi'}>Usługi</Link>
                            </LingNavigationContainer>

                            <LingNavigationContainer>
                                <Link href={'/#realizacje'}>Realizacje</Link>
                            </LingNavigationContainer>

                            <LingNavigationContainer>
                                <Link href={'/#opinie'}>Opinie</Link>
                            </LingNavigationContainer>



                            <LingNavigationOrangeContainer>
                                <Link href={'/#kontakt'}>Kontakt</Link>
                            </LingNavigationOrangeContainer>



                    </motion.nav>
               }
        </AnimatePresence>
    );
}