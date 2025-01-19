'use client'

import Image from "next/image";
import {useEffect, useState} from "react";
import {getImage} from "@/utils/repoStorage";

export default function PhotoRealizacja({typRealizacji}: {typRealizacji: string}) {
    const [imageUrl, setImageUrl] = useState<string>('/');

    useEffect(() => {
        const fetchImage = async () => {
            const temp = await getImage("/realizacje/" + typRealizacji + "/" + typRealizacji + ".jpg");

            setImageUrl(temp);
        }

        fetchImage();
    }, []);

    return (
        <div className={'flex flex-row bg-neutral-600 basis-[400px] shrink-0 relative'}>
            <Image src={imageUrl} alt={'Realizacje'} fill={true} style={{objectFit: 'cover'}}/>
        </div>
    );
}