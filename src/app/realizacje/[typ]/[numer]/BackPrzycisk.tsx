'use client'

import { motion } from "motion/react";
import {useRouter} from "next/navigation";

export default function BackPrzycisk() {
    const router = useRouter();

    return (
        <motion.div
            className={'hover:cursor-pointer z-40 fixed left-0 bottom-0 bg-orangeLight pl-24 text-neutral-800 font-SourGummy text-xl border-2 border-orangeMid py-3 px-5 rounded-r-full'}
            whileHover={{paddingLeft: '110px', transition: {type: 'spring', duration: 0.3}}}
            initial={{translateX: '-100%'}}
            animate={{translateX: '-20%', transition: {duration: 0.6, type: 'spring', delay: 2}}}
            onClick={() => router.back()}
        >
            Powrót
        </motion.div>
    );
}