import PhotoRealizacja from "@/sections/5_Realizacje/PhotoRealizacja";
import {getListOfFolder} from "@/utils/repoStorage";
import Link from "next/link";
import Przycisk from "@/sections/1_StartWeb/Przycisk";

export default async function KafelekRealizacje({realizacja}: {realizacja: any}) {

    const iloscRealizacji = await getListOfFolder('/realizacje/' + realizacja.typ);

    return (
        <div
            className={'flex flex-col w-full lg:w-1/2-calc xl:w-1/3-calc rounded-t-3xl rounded-b-md overflow-hidden border-2 hover:border-orangeMain transition-all duration-300'}>
            <PhotoRealizacja typRealizacji={realizacja.typ}/>
            <div className={'flex flex-col justify-between h-full p-5 gap-5 bg-white'}>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={'font-SourGummy text-3xl text-neutral-700'}>{realizacja.typ}</h2>
                    <p>{realizacja.opis}</p>
                </div>
                <div className={'flex flex-row justify-between text-neutral-700 font-AdventPro'}>

                    <Przycisk disable={iloscRealizacji.length <= 0}>
                        <Link href={'/realizacje/' + realizacja.typ} className={'bg-orangeMain text-white px-6 py-2 rounded-lg font-medium text-lg hover:cursor-pointer'}>
                            Zobacz
                        </Link>
                    </Przycisk>


                    <div className={'flex flex-row gap-3 items-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"/>
                        </svg>
                        <p className={'text-xl font-medium'}>Realizacji: </p>
                        <p className={'text-xl font-semibold'}>{iloscRealizacji.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}