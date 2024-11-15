import Image from "next/image";
import InViewApear from "@/components/Animations/InViewApear";

export default function TileWhyUs({icon, topic, desc, del = 0}: { icon: string, topic: string, desc: string, del?: number}) {
    return (
        <InViewApear directory={'b'} offset={150} delay={del}>
            <div className={'flex flex-row xl:w-5/6 w-full p-3 gap-7 bg-white rounded-xl shadow-md  lg:h-44'}>
                <div className={'basis-1/6 lg:p-3 p-0'}>
                    <div className={'relative w-full h-full'}>
                        <Image src={icon} alt={'Ikona Ołówka'} fill={true}/>
                    </div>
                </div>

                <div className={'basis-5/6 flex flex-col gap-2'}>
                    <div>
                        <h4 className={'text-center border-b-2 border-orangeMain p-1 text-xl font-semibold font-AdventPro text-neutral-700'}>{topic}</h4>
                    </div>
                    <div>
                        <p className={'text-md font-AdventPro text-neutral-700'}>{desc}</p>
                    </div>
                </div>
            </div>
        </InViewApear>
    );
}