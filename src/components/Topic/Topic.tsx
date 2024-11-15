import InViewApear from "@/components/Animations/InViewApear";

export default function Topic({name}: { name: string }) {
    return (
        <div className={'flex flex-col justify-center items-center my-10 gap-4'}>
            <InViewApear directory={'b'} offset={100}>
                <h2 className={'font-SourGummy font-bold text-5xl text-neutral-800'}>{name}</h2>
            </InViewApear>
            <div className={'flex flex-row gap-2 justify-center items-center'}>
                <InViewApear directory={'b'} offset={100} delay={0.5}>
                    <div className={'w-[10px] h-[10px] bg-neutral-800 rounded-full'}></div>
                </InViewApear>
                <InViewApear directory={'b'} offset={100} delay={0.7}>
                    <div className={'w-[10px] h-[10px] bg-neutral-800 rounded-full'}></div>
                </InViewApear>
                <InViewApear directory={'b'} offset={100} delay={0.9}>
                    <div className={'w-[10px] h-[10px] bg-neutral-800 rounded-full'}></div>
                </InViewApear>
            </div>
        </div>
    );
}