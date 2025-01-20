import {AnimatePresence, motion} from "framer-motion";

export default function ExtendMenuIcon({open, setOpen} : {open: boolean, setOpen: any}) {
    const buttonVarians = {visible: {opacity: 1, scale: 1, transition: {delay: 0.3}}, hidden: {opacity: 0, scale: 0}}

    return (
        <div className={'lg:hidden basis-1/3 flex justify-end items-center shrink-0 hover:cursor-pointer'}>
            <div className={'w-12 h-12'} onClick={() => setOpen(!open)}>
                <AnimatePresence>
                    {open ?
                        <motion.svg key={'openTrue'} variants={buttonVarians} initial={'hidden'}
                                    whileInView={'visible'}
                                    exit={'hidden'}
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor" className="w-full aspect-square text-orangeMain"

                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </motion.svg>
                        :

                        <motion.svg key={'openFalse'} variants={buttonVarians} initial={'hidden'}
                                    whileInView={'visible'}
                                    exit={'hidden'}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor" className="w-full aspect-square text-orangeMain"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </motion.svg>
                    }
                </AnimatePresence>
            </div>
        </div>
    );
}