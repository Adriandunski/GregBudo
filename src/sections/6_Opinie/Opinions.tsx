import Carosuel from "@/components/Carosuel/Carosuel";
import OpinionsCard from "@/sections/6_Opinie/OpinionsCard";
import ContainerWeb from "@/components/ContainerWeb";
import InViewApear from "@/components/Animations/InViewApear";
import SumaryOpinions from "@/sections/6_Opinie/SumaryOpinions";
import {getOpinions} from "@/utils/repoDataConnect";
import Topic from "@/components/Topic/Topic";



export default async function Opinions() {
    const sizes = [{width: 2500, slides: 5, withOfCard: 370},
        {width: 1800, slides: 4, withOfCard: 370},
        {width: 1400, slides: 3, withOfCard: 370},
        {width: 950, slides: 2, withOfCard: 370},
        {width: 640, slides: 1, withOfCard: 500},
        {width: 530, slides: 1, withOfCard: 450},
        {width: 0, slides: 1, withOfCard: 360},
    ];

    const data = await getOpinions();

    return (
        <ContainerWeb idStr={'opinions'} className={'bg-white'}>
            <div className={'flex flex-col gap-2'}>
                <div className={'flex flex-col gap-3 items-center text-center'}>
                    <Topic name={'Co ludzie o nas myślą'}/>
                </div>
                <SumaryOpinions></SumaryOpinions>

                <InViewApear directory={'b'}>
                    <Carosuel breaks={sizes}>
                        {data.opinies.map(op => <OpinionsCard key={op.id} opinion={op}></OpinionsCard>)}
                    </Carosuel>
                </InViewApear>
            </div>
        </ContainerWeb>
    );
}