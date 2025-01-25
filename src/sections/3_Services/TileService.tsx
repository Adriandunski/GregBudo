import Image from "next/image";
import InViewApear from "@/components/Animations/InViewApear";

export default function TileService({icon, topic, desc, bgColor, textColor, delay = 0}: {
    icon: string,
    topic: string,
    desc: string,
    bgColor: string,
    textColor: string,
    delay?: number,
}) {
    return (
        <InViewApear directory={'r'} delay={delay} offset={300}
            className={`flex flex-col w-full lg:w-1/2-calc xl:w-1/3-calc`}>
            <div className={`flex flex-col w-full gap-7 rounded-3xl p-10 border-2 border-neutral-700 shadow-lg ${bgColor} h-full`}>
                <div className={'flex flex-row items-center justify-center'}>
                    <div
                        className={'bg-orangeLight h-24 aspect-square flex items-center justify-center rounded-full border-2 border-neutral-700'}>
                        <Image src={icon} alt={'test'} width={50} height={50}/>
                    </div>
                </div>
                <div>
                    <h2 className={`text-4xl text-center font-semibold font-AdventPro ${textColor}`}>{topic}</h2>
                </div>
                <div>
                    <p className={`text-lg font-AdventPro ${textColor}`}>{desc}
                    </p>
                </div>
            </div>
        </InViewApear>
    );
}