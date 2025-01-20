import PhotoRealizacja from "@/sections/5_Realizacje/PhotoRealizacja";
import {getListOfFolder} from "@/utils/repoStorage";
import Link from "next/link";

export default async function KafelekRealizacje({realizacja}: {realizacja: any}) {

    const iloscRealizacji = await getListOfFolder('/realizacje/' + realizacja.typ);

    return (
        <div
            className={'flex flex-col w-full lg:w-1/2-calc 2xl:w-1/3-calc rounded-t-3xl rounded-b-md overflow-hidden border-2 hover:border-orangeMain transition-all duration-300'}>
            <PhotoRealizacja typRealizacji={realizacja.typ}/>
            <div className={'flex flex-col justify-between h-full p-5 gap-5 bg-white'}>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={'font-SourGummy text-3xl text-neutral-700'}>{realizacja.typ}</h2>
                    <p>{realizacja.opis}</p>
                </div>
                <div className={'flex flex-row justify-between text-neutral-700 font-AdventPro'}>

                    <Link href={'/realizacje/' + realizacja.typ} className={'bg-orangeMain text-white px-6 py-2 rounded-lg font-medium text-lg hover:cursor-pointer'}>
                        Zobacz
                    </Link>
                    <div className={'flex flex-row gap-3 items-center'}>
                        <p className={'text-xl font-medium'}>Realizacji: </p>
                        <p className={'text-xl font-semibold'}>{iloscRealizacji}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}