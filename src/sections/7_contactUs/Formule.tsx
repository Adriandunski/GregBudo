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
                    <button className={'shrink-0 border-2 border-black px-2 py-1 rounded-md'} onClick={wybierzPlik}> Wybierz pliki</button>
                    <div className={'flex flex-row flex-wrap gap-3'}>
                        {files.map((value, index) => <Plik key={index} file={value} index={index} onDelete={deleteFile}/>)}
                    </div>
                </div>
                <input id="fileInput" name={'pliki'} onChange={handleFileChange} className={'border-2 hidden'} type={"file"} multiple={true}/>

                <button disabled={pending} className={'bg-orangeMain text-white py-4 rounded-3xl'}>Wyślij</button>
            </form>
    );
}

function Plik({file, index, onDelete}: {file: any, index: number, onDelete: (numer: number) => void}) {
    const czyZdjecie = file.type.startsWith('image/');
    let url = '';

    if (czyZdjecie) {
        url = URL.createObjectURL(file);
    }

    return(
        <div className={'w-16 h-24 relative rounded-md overflow-hidden'}>
            {czyZdjecie ?
                <Image src={url} alt={file.name} fill={true} objectFit={'cover'}/>
                :
                <div className={'flex flex-col items-center justify-center bg-orangeLight w-full h-full relative gap-2'}>
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