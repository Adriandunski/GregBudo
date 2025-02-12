'use client'
import Image from "next/image";
import {useState} from "react";
import Navigation from "@/components/Header/Navigation";
import ExtendMenuIcon from "@/components/Header/ExtendMenuIcon";


export default function MainHeader() {
    const [open, setOpen] = useState(true);

    return (
        <header className={'sticky top-0 z-40'}>
                <div className={'flex flex-row bg-greenMain justify-between lg:px-10 py-3 px-5 relative'}>
                    <div className={'flex flex-row gap-10 basis-1/3 lg:basis-auto shrink-0'}>
                        <div className={'w-[170px] relative'}>
                            <Image src={'/logoWEB.png'} alt={'Logo GregBudo'} fill={true} objectFit={'contain'}/>
                        </div>
                    </div>
                    <Navigation open={open} setOpen={setOpen}/>
                    <ExtendMenuIcon open={open} setOpen={setOpen}/>
                </div>
        </header>
    );
}