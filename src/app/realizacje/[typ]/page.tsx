import ContainerWeb from "@/components/ContainerWeb";
import Image from "next/image";
import ContactUs from "@/sections/7_contactUs/ContactUs";
import {getImage, getListOfFolder, getPierwszyPlik, getWszystkiePliki} from "@/utils/repoStorage";
import Topic from "@/components/Topic/Topic";
import Link from "next/link";
import BackPrzycisk from "@/app/realizacje/[typ]/[numer]/BackPrzycisk";
import {Suspense} from "react";
import {redirect, useRouter} from "next/navigation";

export default async function Page({params}: {
    params: Promise<{ typ: string }>
}) {
    const typ = decodeURI((await params).typ);


    return (
        <>
            <ContainerWeb idStr={''} className={'bg-orangeDark'}>
                <div className={'flex flex-row justify-start'}>
                    <Topic name={typ}/>
                </div>
                <KontenerKart typ={typ}/>
            </ContainerWeb>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.81 -0.81 1440 96.12">
                <path fill="#F7EAD8" fillOpacity="1"
                      d="M -0.811 69.625 L 47.189 77.476 C 95.189 85.033 191.189 101.175 287.189 93.104 C 383.189 85.033 479.189 54.217 575.189 53.997 C 671.189 54.217 767.189 85.033 863.189 89.215 C 959.189 93.104 1055.189 69.625 1151.189 65.737 C 1247.189 61.555 1343.189 77.696 1391.189 85.253 L 1439.189 93.104 L 1439.189 -0.811 L 1391.189 -0.811 C 1343.189 -0.811 1247.189 -0.811 1151.189 -0.811 C 1055.189 -0.811 959.189 -0.811 863.189 -0.811 C 767.189 -0.811 671.189 -0.811 575.189 -0.811 C 479.189 -0.811 383.189 -0.811 287.189 -0.811 C 191.189 -0.811 95.189 -0.811 47.189 -0.811 L -0.811 -0.811 L -0.811 69.625 Z"
                      transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"></path>
            </svg>
            <ContactUs/>
        </>
    );
}

async function KontenerKart({typ}: { typ: string }) {
    const realizacje = await getListOfFolder('/realizacje/' + typ);
    const realizacje2 = (
        await Promise.all(
            realizacje.map(async value => {
                const pliki = await getWszystkiePliki(value);
                return pliki.length > 0 ? value : null;
            })
        )
    ).filter(value => value !== null);


    return (
        <div className={'flex flex-col'}>
            <div className={`grid grid-cols-fill-300  lg:grid-cols-fill-300 gap-x-5 gap-y-16 justify-around`}>
                {realizacje2.map((value, index) =>
                    <Suspense fallback={KartaLoading()} key={value}>
                        <Karta typ={typ} numer={index + 1}/>
                    </Suspense>
                )}
            </div>
            <BackPrzycisk/>
        </div>);
}

async function Karta({numer, typ}: { numer: number, typ: string }) {
    const pierwszeZdjecie = await getPierwszyPlik('/realizacje/' + typ + '/' + numer);
    const zdjecieURL = await getImage(pierwszeZdjecie.fullPath);

    return (
        <div className={'flex basis-[300px] shrink-0 flex-col gap-5'} >
            <div className={'hover:cursor-pointer overflow-hidden h-[400px] relative border-8 border-white rounded-sm'} onClick={() => redirect(`/realizacje/${typ}/${numer}`)}>
                <Image src={zdjecieURL} alt={'zdjecie'} fill={true} objectFit={'cover'}/>
            </div>
            <div className={'flex justify-center'}>
                <Link href={`/realizacje/${typ}/${numer}`}
                      className={'border-2 border-orangeMain rounded-md py-2 px-10 font-SourGummy text-4xl  font-extralight bg-white'}>
                    <span>Pokój: </span>
                    <span>{numer}</span>
                </Link>
            </div>
        </div>
    );
}

function KartaLoading() {
    return (
        <div className="flex items-center justify-center basis-[300px] h-[400px] max-w-sm bg-white rounded-lg animate-pulse dark:bg-gray-800">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
            </svg>
        </div>
    );
}