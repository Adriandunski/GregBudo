'use client'
import {useState} from "react";
import Image from "next/image";

export default function Formule() {
    const [files, setFiles] = useState([]);

    console.log(files);

    function wybierzPlik(event) {
        event.preventDefault();
        document.getElementById('fileInput').click();
    }

    const handleFileChange = (event) => {
        setFiles(Array.from(event.target.files)); // Zamień FileList na tablicę
    };

    return(
            <form className={'flex flex-col gap-8'}>
                <input className={'py-4 px-5 rounded-md'} type={'text'} name={''} placeholder={'Imię'}/>
                <div className={'flex gap-6'}>
                    <input className={'w-full py-4 px-5 rounded-md'} type={'tel'} name={''} placeholder={'Telefon'}/>
                    <input className={'w-full py-4 px-5 rounded-md'} type={'email'} name={''} placeholder={'Email'}/>
                </div>
                <textarea className={'py-4 px-5 rounded-md'} rows={6} placeholder={'Wiadomość'}></textarea>
                <div className={'flex flex-row items-start gap-5'}>
                    <button className={'border-2 shrink-0'} onClick={wybierzPlik}> Wybierz pliki</button>
                    <div className={'flex flex-row gap-3'}>
                        {files.map(value => <Plik key={value.name} file={value}/>)}
                    </div>
                </div>
                <input id="fileInput" onChange={handleFileChange} className={'border-2 hidden'} type={"file"} multiple={true}/>

                <button className={'bg-orangeMain text-white py-4 rounded-3xl'}>Wyślij</button>
            </form>
    );
}

function Plik({file}: {file: any}) {
    const czyZdjecie = file.type.startsWith('image/');
    let url = '';

    if (czyZdjecie) {
        url = URL.createObjectURL(file);
    }

    return(
        <div className={'w-20 h-28 relative rounded-md overflow-hidden'}>
            {czyZdjecie ?
                <Image src={url} alt={file.name} fill={true} objectFit={'cover'}/>
                :
                <div className={'flex flex-row items-center justify-center bg-orangeLight w-full h-full'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="size-8 text-neutral-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                    </svg>
                </div>
            }
            <div className={'absolute top-0 right-0 bg-orangeDark rounded-bl-3xl pb-2 pl-2 w-10 aspect-square'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none"
                          stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="32" d="M320 320L192 192M192 320l128-128"/>
                </svg>
            </div>

        </div>
    );
}