'use client'

import {createContext, useContext, useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";

const ButtomPopContext = createContext<any>({});
export const useButtomPopContext = () => useContext(ButtomPopContext);

export default function PopupButtomContext({children}: {children: any}) {

    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (content !== null) {
            setVisible(true);
        }
    }, [content]);

    return (
        <ButtomPopContext.Provider value={{setVisible, setContent}}>
            {children}
            <AnimatePresence>
                {visible &&
                    <motion.div animate={{y: 0, opacity: 1}}
                                initial={{y: 150, opacity: 0}}
                                exit={{y: 150, opacity: 0}}
                                className={'fixed bottom-12 flex w-full justify-center z-50 pointer-events-none'}>
                        {content}
                    </motion.div>
                }
            </AnimatePresence>

        </ButtomPopContext.Provider>
    );
}