export default async function Page({params}: {
    params: Promise<{ typ: string }>
}) {
    const typ = (await params).typ;

    return (
        <div className={'flex flex-col bg-orangeDark'}>
            <div> {typ}</div>
            <div className={'flex flex-row gap-5'}>
                <Karta/>
                <Karta/>
                <Karta/>
            </div>
            <div>
                <button>Powrot</button>
            </div>
        </div>
    );
}

function Karta() {
    return(
        <div className={'flex flex-col'}>
            <div className={'bg-neutral-500'}>zdjecie</div>
            <div className={'border-2 border-orangeMain rounded-md py-2 px-10 font-SourGummy text-4xl  font-extralight bg-white'}> Pokój 1</div>
        </div>
    );
}