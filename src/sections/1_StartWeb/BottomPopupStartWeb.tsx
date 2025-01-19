'use client'

import { motion } from "motion/react";

export default function BottomPopupStartWeb() {
    return (
        <motion.div whileInView={{justifyContent: 'space-between'}} initial={{justifyContent: 'center'}} transition={{delay: 0.5}} className={'bg-white h-12 flex flex-row items-center rounded-full py-2 px-3 gap-3'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0"
                 stroke="currentColor" className="w-6 aspect-square text-neutral-700">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
            </svg>
            <motion.div initial={{width: '0px'}} animate={{width: 'auto'}} transition={{delay: 0.5}}>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}} className={'text-neutral-700 font-medium text-lg font-Roboto'}>O nas </motion.p>
            </motion.div>
        </motion.div>
    );
}