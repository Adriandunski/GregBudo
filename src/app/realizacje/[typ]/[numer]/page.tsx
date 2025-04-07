import ContainerWeb from "@/components/ContainerWeb";
import ContactUs from "@/sections/7_contactUs/ContactUs";
import Topic from "@/components/Topic/Topic";
import {getWszystkiePliki} from "@/utils/repoStorage";
import {StorageReference, getDownloadURL} from "@firebase/storage";
import {Suspense} from "react";
import ZdjecieClient from "@/app/realizacje/[typ]/[numer]/ZdjecieClient";
import BackPrzycisk from "@/app/realizacje/[typ]/[numer]/BackPrzycisk";
import {getRealizacjaByTyp} from "@/utils/repoDataConnect";

export default async function Page({params}: {
    params: Promise<{ typ: string, numer: string }>
}) {
    const typ = decodeURI((await params).typ);
    const numer = decodeURI((await params).numer);
    const realizacja = await getRealizacjaByTyp(typ);


    return(
        <>
            <ContainerWeb idStr={''} className={'bg-orangeDark'}>
                <div className={'flex flex-row justify-start'}>
                    <Topic name={`${realizacja.realizacjas[0].typ2} ${numer}`}/>
                </div>
                <KontenerZdjec typ={typ} numer={numer}/>
            </ContainerWeb>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.81 -0.81 1440 96.12">
                <path fill="#F7EAD8" fillOpacity="1"
                      d="M -0.811 69.625 L 47.189 77.476 C 95.189 85.033 191.189 101.175 287.189 93.104 C 383.189 85.033 479.189 54.217 575.189 53.997 C 671.189 54.217 767.189 85.033 863.189 89.215 C 959.189 93.104 1055.189 69.625 1151.189 65.737 C 1247.189 61.555 1343.189 77.696 1391.189 85.253 L 1439.189 93.104 L 1439.189 -0.811 L 1391.189 -0.811 C 1343.189 -0.811 1247.189 -0.811 1151.189 -0.811 C 1055.189 -0.811 959.189 -0.811 863.189 -0.811 C 767.189 -0.811 671.189 -0.811 575.189 -0.811 C 479.189 -0.811 383.189 -0.811 287.189 -0.811 C 191.189 -0.811 95.189 -0.811 47.189 -0.811 L -0.811 -0.811 L -0.811 69.625 Z"
                      transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"></path>
            </svg>
            <BackPrzycisk/>
            <ContactUs/>
        </>
    );
}

async function KontenerZdjec({typ, numer} : {typ: string, numer: string}) {
    const listaZdjec = await getWszystkiePliki('realizacje/' + typ + '/' + numer)

    return(
        <div className={'grid grid-cols-4 gap-8 auto-rows-[500px]'}>
            {listaZdjec.map(value => <Suspense key={value.name} fallback={ZdjecieLoading()}><Zdjecie  referencja={value}/></Suspense>)}
        </div>
    );
}

function ZdjecieLoading() {
    return (
        <div role="status"
             className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div
                className="flex items-center justify-center w-full h-[500px] bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
        </div>
    );
}

async function Zdjecie({referencja} : {referencja: StorageReference}) {

    const zdjecieURL = await getDownloadURL(referencja);

    return (
        <ZdjecieClient path={zdjecieURL}/>
    );
}