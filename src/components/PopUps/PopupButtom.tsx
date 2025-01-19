'use client'

import {useButtomPopContext} from "@/components/PopupButtomContext";
import {useEffect} from "react";

export default function PopupButtom({children} : {children: any}) {
    const {setContent}: {setContent: any} = useButtomPopContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            setContent(children);
        }, 2000);


        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div></div>
        </>
    );
}