'use client'

import {useState} from "react";

export default function ExtendOpinion({opinion}: { opinion: any }) {

    const [show, setShow] = useState(false);

    return (
        <div>
            {opinion.opinion.length > 180 && <p className={'text-right'} onClick={() => setShow(true)}>Więcej</p>}
            {show &&
                <div className={'fixed top-0 left-0 h-full z-50 bg-white w-full flex justify-center items-center'}>
                    <div className={'border-2 bg-white shadow-2xl'}>
                        <p>{opinion.opinion}</p>
                    </div>
                </div>
            }
        </div>
    );
}