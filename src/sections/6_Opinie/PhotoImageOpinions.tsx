'use client'

import {getImage} from "@/utils/repoStorage";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function PhotoImageOpinions({urlPhoto} : {urlPhoto: string}) {
    const [imageUrl, setImageUrl] = useState<string>('/');

    useEffect(() => {
        const fetchImage = async () => {
            const temp = await getImage("/faces/" + urlPhoto);

            setImageUrl(temp);
        }

        fetchImage();
    }, []);

    return (
            <div className={'bg-orangeMain rounded-full w-20 h-20 relative'}>
                <Image src={imageUrl} alt={'opiniaTwarzw'} fill objectFit={'cover'}/>
            </div>
    );
}