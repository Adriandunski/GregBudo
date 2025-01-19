'use client'

import InViewApear from "@/components/Animations/InViewApear";
import {useButtomPopContext} from "@/components/PopupButtomContext";
import {useInView} from "framer-motion";
import {useEffect, useRef} from "react";

export default function Topic({name}: { name: string }) {
    const refDiv = useRef(null);
    const isInView = useInView(refDiv);

    const {setVisible}: { setVisible: any} = useButtomPopContext();

    useEffect(() => {
        let timer2;

        if (isInView) {
            timer2 = setTimeout(() => {
                setVisible(false);
            }, 1000);
        }


        return () => clearTimeout(timer2);
    }, [isInView]);

    return (
        <div ref={refDiv} className={'flex flex-col justify-center items-center my-10 gap-4 hover:tracking-widest transition-all'}>
            <InViewApear directory={'b'} offset={100}>
                <h2 className={'font-SourGummy font-bold text-5xl text-neutral-800'}>{name}</h2>
            </InViewApear>
            <div className={'flex flex-row gap-2 justify-center items-center'}>
                <InViewApear directory={'b'} offset={100} delay={0.5}>
                    <div className={'w-[10px] h-[10px] bg-neutral-800 rounded-full'}></div>
                </InViewApear>
                <InViewApear directory={'b'} offset={100} delay={0.7}>
                    <div className={'w-[10px] h-[10px] bg-neutral-800 rounded-full'}></div>
                </InViewApear>
                <InViewApear directory={'b'} offset={100} delay={0.9}>
                    <div className={'w-[10px] h-[10px] bg-neutral-800 rounded-full'}></div>
                </InViewApear>
            </div>
        </div>
    );
}