import Image from "next/image";

export default function KafelekRealizacje({topic, desc, image}: {topic: string, desc: string, image: string}) {
    return (
        <div
            className={'flex flex-col w-full lg:w-1/2-calc 2xl:w-1/3-calc rounded-t-3xl rounded-b-md overflow-hidden'}>
            <div className={'flex flex-row bg-neutral-600 basis-[400px] relative'}>
                <Image src={image} alt={'Realizacje'} fill={true} style={{ objectFit: 'cover' }} />
            </div>
            <div className={'flex flex-col p-5 gap-5 bg-white'}>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={'font-SourGummy text-3xl text-neutral-700'}>{topic}</h2>
                    <p>{desc}</p>
                </div>
                <div className={'flex flex-row justify-between text-neutral-700 font-AdventPro'}>

                    <button className={'bg-orangeMain text-white px-6 py-2 rounded-lg font-medium text-lg'}>
                        Zobacz
                    </button>
                    <div className={'flex flex-row gap-3 items-center'}>
                        <p className={'text-xl font-medium'}>Realizacji: </p>
                        <p className={'text-xl font-semibold'}>18</p>
                    </div>
                </div>
            </div>
        </div>
    );
}