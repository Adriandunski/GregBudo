import {getImage} from "@/utils/StorageRepo";
import Image from "next/image";

export default async function PhotoImageOpinions({urlPhoto} : {urlPhoto: string}) {
    const imageUrl = await getImage(urlPhoto);

    return (
            <div className={'bg-[#99B0A7] rounded-full w-20 h-20 relative'}>
                <Image src={imageUrl} alt={'opiniaTwarz'} fill objectFit={'cover'}/>
            </div>
    );
}