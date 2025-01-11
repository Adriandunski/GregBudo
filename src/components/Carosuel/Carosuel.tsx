'use client'

import {motion} from "framer-motion";
import React, {ReactNode, Suspense, useEffect, useState} from "react";
import {countDirection, radioButtoSet} from "./CarosuelFunctions";
import CardCarosuel from "@/components/Carosuel/CardCarosuel";
import useCarosuelBreaks from "@/components/Carosuel/useCarosuelBreaks";

export default function Carosuel({children, breaks, gap = 40, showButtons = true, paddingX = 32}: {
    children: ReactNode[],
    breaks: any[],
    gap?: number,
    showButtons?: boolean,
    paddingX?: number
}) {
    const [indexSlide, setIndexSlide] = useState(0);
    const [myArray, setMyArray] = useState([1]);
    const [buttonIndex, setButtonIndex] = useState(0);
    const optionsOfCard = useCarosuelBreaks(breaks);


    function calculateValueStepSlide(step: number) {
        if (step == 0) {
            makeStepSlide(indexSlide + 0.00000001);
        } else {
            if ((indexSlide + step) < 0) {
                makeStepSlide(0);
            } else if (((indexSlide + step) > (children.length - optionsOfCard.slides))) {
                makeStepSlide((children.length - optionsOfCard.slides));
            } else {
                makeStepSlide(Math.floor(indexSlide + step));
            }
        }
    }

    function makeStepSlide(newCardIndex: number) {
        setIndexSlide(newCardIndex);

        const liczba = radioButtoSet(Array.from(myArray), newCardIndex);
        setButtonIndex(liczba);
    }

    useEffect(() => {
        if (children.length < optionsOfCard.slides) {
            optionsOfCard.slides = children.length;
        }

        const myArraj = [];

        for (let i = optionsOfCard.slides; i <= children.length; i += optionsOfCard.slides) {
            myArraj.push(i - optionsOfCard.slides);
        }

        if ((children.length % optionsOfCard.slides) > 0) {
            const len = (myArraj.length) * optionsOfCard.slides;
            const newDot = len - (optionsOfCard.slides - (children.length % optionsOfCard.slides));
            myArraj.push(newDot);
        }

        setMyArray(myArraj);
        makeStepSlide(0);
    }, [optionsOfCard]);

    function handleEndDrag(offset: number) {
        const temp = countDirection(offset);
        calculateValueStepSlide(temp);
    }

    function buttonHandle(index: number, num: number) {
        setIndexSlide(num);
        setButtonIndex(index);
    }

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <div className={'overflow-hidden box-content py-14 relative'}
                 style={{
                     width: (optionsOfCard.slides * (optionsOfCard.withOfCard + gap)) - gap,
                     paddingLeft: paddingX,
                     paddingRight: paddingX
                 }}>
                <motion.div animate={{x: ((indexSlide * (optionsOfCard.withOfCard + gap)) * -1)}}
                            transition={{duration: 2, type: 'spring'}}
                            drag={'x'}
                            dragConstraints={{
                                right: 0,
                                left: ((children.length - optionsOfCard.slides) * (optionsOfCard.withOfCard + gap) * (-1))
                            }}
                            dragElastic={0.1}
                            onDragEnd={(e, {offset, velocity}) => {
                                handleEndDrag(offset.x);
                            }}
                            className={'inline-flex'} style={{gap: gap}}>

                    {children.map((value, index) => {
                        return <Suspense key={index} fallback={<div style={{width: optionsOfCard.withOfCard, height: '50px'}}></div>}>
                            <CardCarosuel widthCard={optionsOfCard.withOfCard} key={index}>{value}</CardCarosuel>
                        </Suspense>
                    })}
                </motion.div>

                {showButtons && Math.floor(indexSlide) !== 0 &&
                    <div
                        className={'left-0 top-1/2 -translate-y-1/2  absolute hover:cursor-pointer w-12 h-12 bg-gold rounded-full p-2'}
                        onClick={() => calculateValueStepSlide(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" className="w-full h-ful text-white">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                        </svg>
                    </div>}

                {showButtons && indexSlide !== children.length - optionsOfCard.slides &&
                    <div
                        className={'right-0 top-1/2 -translate-y-1/2  absolute hover:cursor-pointer w-12 h-12 bg-gold rounded-full p-2'}
                        onClick={() => calculateValueStepSlide(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" className="w-full h-ful text-white">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        </svg>
                    </div>}

            </div>
            <div className={'flex gap-1 justify-center w-full h-10'}>

                <div className={'flex gap-3 items-center'}>
                    {myArray.map((num, index) => (
                        <button key={index}
                                className={`rounded-full transition-all ${index === buttonIndex ? 'bg-gold w-6 h-6' : 'bg-neutral-400 w-5 h-5'}`}
                                onClick={() => {
                                    buttonHandle(index, num)
                                }}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}