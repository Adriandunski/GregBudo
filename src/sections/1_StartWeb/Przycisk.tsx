'use client'
import { motion } from "motion/react";
import {ReactNode} from "react";

export default function Przycisk({children, disable = false}: {children: ReactNode, disable?: boolean}) {
    return(
        <motion.button className={`${disable ? 'pointer-events-none opacity-50' : ''}`} disabled={disable} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            {children}
        </motion.button>
    );
}