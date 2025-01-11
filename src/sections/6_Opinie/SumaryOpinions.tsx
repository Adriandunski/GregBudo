'use client'
import Star from "@/sections/6_Opinie/Star";
import Image from "next/image";
import {animate, motion, useInView, useMotionValue, useTransform} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import {useEffect, useRef, useState} from "react";

export default function SumaryOpinions() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const ref = useRef(null);
    const inView = useInView(ref);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (inView) {
            setOpen(true);
        }
    }, [inView])

    function start() {
        const animation = animate(count, 12, {duration: 3});
    }

    return (
        <div ref={ref} className={'flex flex-col justify-end items-center gap-4'}>
            <div className={'h-[3rem]'}>
                {open && <TypeAnimation className={'text-5xl font-AdventPro'} cursor={false} style={{whiteSpace: 'pre-line'}}
                                        sequence={[
                                            // Same substring at the start will only be typed once, initially
                                            `Dobra`, 1000, `Bardzo dobra`, 1000, 'Doskonała'
                                        ]}
                                        speed={1}
                />}

            </div>

            <div className={'flex'}>
                <Star wielkosc={6} czyZolta={true}></Star>
                <Star wielkosc={6} czyZolta={true}></Star>
                <Star wielkosc={6} czyZolta={true}></Star>
                <Star wielkosc={6} czyZolta={true}></Star>
                <Star wielkosc={6} czyZolta={true}></Star>
            </div>
            <div>
                <span className={'text-xl'}>Na poddstawie: </span>
                <motion.span onViewportEnter={start} className={'text-xl font-semibold'}>{rounded}</motion.span>
                <span className={'text-xl font-semibold'}> opini</span>
            </div>
            <div className={'w-24 aspect-square'}>
                <Image src={'/google.png'} alt={'Google Icon'} width={500} height={'500'}></Image>
            </div>

        </div>
    );
}