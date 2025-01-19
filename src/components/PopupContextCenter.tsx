'use client'

import {motion} from 'motion/react';
import {createContext, useContext, useEffect, useState} from 'react';
import {AnimatePresence} from "motion/react";

const ProductContextCenter = createContext<any>({});
export const useProductContextCenter = () => useContext(ProductContextCenter);


export default function PopupContextCenter({children}: { children: any }) {

    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (content !== null) {
            setVisible(true);
        }
    }, [content]);

    return (
        <ProductContextCenter.Provider value={{setVisible, setContent}}>
            {children}
            <AnimatePresence>
                {visible &&
                    <motion.div animate={{y: 0, opacity: 1}}
                                initial={{y: 150, opacity: 0}}
                                exit={{y: 150, opacity: 0}}
                                className={'fixed top-0 left-0 flex justify-center items-center w-full h-full rounded-xl'}>
                        {content}
                    </motion.div>
                }
            </AnimatePresence>

        </ProductContextCenter.Provider>
    );
}