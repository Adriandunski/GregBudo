"use client"

import {AnimatePresence} from "motion/react"
import * as motion from "motion/react-client"
import {createContext, useEffect, useState} from "react"

const ProductContext = createContext<any>({});

export default function ExitAnimation() {
    const [visible, setVisible] = useState(true);
    const [content, setContent] = useState(null);


    useEffect(() => {
        if (content !== null) {
            setVisible(true);
        }
    }, [content]);

    return (
        <ProductContext.Provider value={''}>
        <div>
            <AnimatePresence>
                {visible &&
                    <motion.div animate={{y: 0, opacity: 1}}
                                initial={{y: 150, opacity: 0}}
                                exit={{y: 150, opacity: 0}}
                                className={'fixed top-0 left-0  z-50 flex justify-center items-center'}>
                        test
                    </motion.div>
                }
            </AnimatePresence>
            <button onClick={() => setVisible(false)}> zamkij</button>
        </div>
        </ProductContext.Provider>
    )
}