'use client'

import {useState} from "react";

export default function ModalZdjecie({setShow, path} : {setShow: any, path:string}) {

    const [loading, setLoading] = useState(false);

    return(
        <>
            <div onClick={() => setShow(false)}
                 className={`z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center 
                 cursor-default bg-black bg-opacity-80 transition-all duration-1000 ${loading ? 'flex' : 'hidden'}`}>
                <div className={'h-[90%] relative'}>
                    <img src={path}
                         alt={''}
                         className={'object-contain h-full'}
                         onClick={(e) => e.stopPropagation()}
                         onLoad={() => setLoading(true)}
                    />
                    <div onClick={() => setShow(false)}
                         className={'w-12 hover:cursor-pointer aspect-square absolute top-0 right-0 text-white hover:text-black transition-all duration-300'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}