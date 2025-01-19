'use client'

import {motion} from "framer-motion";

export default function TileContact({children, topic, isDiff}: { topic: string, isDiff: boolean, children: any[] }) {


    return (
        <div  className={'w-full rounded-2xl p-4 flex flex-col gap-3 justify-start items-center shadow-lg'}>
                {isDiff ?
                    <motion.div animate={{y: ['10px', '-10px']}} transition={{repeat: Infinity, duration: 1, repeatType: 'reverse', type: 'spring'}}
                        className={'bg-gold border-orangeMain rounded-full w-20 h-20 flex justify-center items-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-12 h-12 text-white">
                            {children[0]}
                        </svg>
                    </motion.div> :
                    <motion.div animate={{y: ['7px', '-7px']}} transition={{repeat: Infinity, duration: 1, repeatType: 'reverse'}}
                        className={'border-4 border-orangeMain rounded-full w-20 h-20 flex justify-center items-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-12 h-12">
                            {children[0]}
                        </svg>
                    </motion.div>}
            <p className={'font-semibold text-neutral-800 text-2xl font-AdventPro'}>{topic}</p>
            <div className={'flex flex-col justify-center items-center text-center'}>
                {children[1]}
            </div>
        </div>
    );
}