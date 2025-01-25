'use client'

import Image from "next/image";
import {useState} from "react";
import ModalZdjecie from "@/app/realizacje/[typ]/[numer]/ModalZdjecie";

export default function ZdjecieClient({path} : {path: string}) {

    const [show, setShow] = useState(false);

    return (
        <div
            className={`h-full w-full rounded-xl relative overflow-hidden border-2 border-white hover:border-orangeMain hover:cursor-pointer transition-all duration-300`}>
            <Image onClick={() => setShow(true)} src={path} alt={''} fill={true} objectFit={'cover'} />
            {show &&
                <ModalZdjecie setShow={setShow} path={path}/>}
        </div>
    );
}