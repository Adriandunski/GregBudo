'use client'
import {useState, useActionState, useEffect} from "react";
import Image from "next/image";
import {sendFormule} from "@/actions";

export default function Formule() {
    const [files, setFiles] = useState<File[]>([]);
    const [state, formAction, pending] = useActionState(sendFormule, {success: false,message: ''})

    useEffect(() => {
        if (state.success) {
            setFiles([]);
        }
    }, [state]);

    useEffect(() => {
        console.log(pending);
    }, [pending]);


    function wybierzPlik(event: Event) {
        event.preventDefault();
        document.getElementById('fileInput').click();
    }

    function deleteFile(numer: number) {
        const nowaTablia = files.filter((value, index) => index != numer);
        setFiles(nowaTablia);
    }

    const handleFileChange = (event: Event) => {
        const nowaTablica = [...files, ...Array.from(event.target.files)];
        setFiles(nowaTablica); // Zamień FileList na tablicę
    };

    return(
        <form action={formAction} className={'flex flex-col gap-8'}>
            <input className={'py-4 px-5 rounded-md'} type={'text'} name={'imie'} placeholder={'Imię'}/>
            <div className={'flex gap-6'}>
                <input className={'w-full py-4 px-5 rounded-md'} type={'tel'} name={'telefon'} placeholder={'Telefon'}/>
                <input className={'w-full py-4 px-5 rounded-md'} type={'email'} name={'email'} placeholder={'Email'}/>
            </div>
            <textarea className={'py-4 px-5 rounded-md'} rows={6} placeholder={'Wiadomość'}></textarea>
            <div className={'flex flex-row items-start gap-5'}>
                <button className={'shrink-0 border-2 border-black px-2 py-1 rounded-md'} onClick={wybierzPlik}> Wybierz
                    pliki
                </button>
                <div className={'flex flex-row flex-wrap gap-3'}>
                    {files.map((value, index) => <Plik key={index} file={value} index={index} onDelete={deleteFile}/>)}
                </div>
            </div>
            <input id="fileInput" name={'pliki'} onChange={handleFileChange} className={'border-2 hidden'} type={"file"}
                   multiple={true}/>

            <button disabled={pending} className={'bg-orangeMain text-white py-4 rounded-3xl'}>Wyślij</button>

            {/*<div role="status" className="absolute flex flex-row justify-center items-center top-0 left-0 w-full h-full bg-black opacity-40">*/}
            {/*    <svg aria-hidden="true"*/}
            {/*         className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"*/}
            {/*         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path*/}
            {/*            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"*/}
            {/*            fill="currentColor"/>*/}
            {/*        <path*/}
            {/*            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"*/}
            {/*            fill="currentFill"/>*/}
            {/*    </svg>*/}
            {/*    <span className="sr-only">Loading...</span>*/}
            {/*</div>*/}
        </form>
    );
}

function Plik({file, index, onDelete}: { file: any, index: number, onDelete: (numer: number) => void }) {
    const czyZdjecie = file.type.startsWith('image/');
    let url = '';

    if (czyZdjecie) {
        url = URL.createObjectURL(file);
    }

    return (
        <div className={'w-16 h-24 relative rounded-md overflow-hidden'}>
            {czyZdjecie ?
                <Image src={url} alt={file.name} fill={true} objectFit={'cover'}/>
                :
                <div
                    className={'flex flex-col items-center justify-center bg-orangeLight w-full h-full relative gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="size-8 text-neutral-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                    </svg>
                    <p className={'text-[6px]'}>{file.name}</p>
                </div>
            }
            <div
                onClick={() => onDelete(index)}
                className={'absolute top-0 right-0 bg-orangeDark rounded-bl-3xl pb-2 pl-2 w-7 aspect-square hover:cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400" viewBox="0 0 512 512">
                    <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none"
                          stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="32" d="M320 320L192 192M192 320l128-128"/>
                </svg>
            </div>

        </div>
    );
}